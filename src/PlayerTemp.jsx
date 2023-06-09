// Import liraries
import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  Capability,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

// Import custom libraries
import { callSongList } from './srcCallApi/Api';
import Play48 from "../assets/SVGComponent/Play48";
import Pause48 from "../assets/SVGComponent/Pause48";
import SkipPrev from "../assets/SVGComponent/SkipPrev32";
import SkipNext from "../assets/SVGComponent/SkipNext32";

const NOW_PLAYING_BASE = Dimensions.get('window').width
const NOW_PLAYING_IMAGE = Dimensions.get('window').width * 0.75
const NOW_PLAYING_BASE_IMAGE = Dimensions.get('window').width * 0.825

// Create a component
function PlayerTemp() {
  const reactRef = React.useRef()
  const [currentSong, setCurrentSong] = React.useState(0);
  const [dataSource, setDataSource] = React.useState([]);
  const playbackState = usePlaybackState()
  const progress = useProgress()

  React.useEffect(() => {
    callSongList().then(data => {
      setDataSource(data)
      async function setupPlayer() {
        try {
          await TrackPlayer.setupPlayer()
          TrackPlayer.updateOptions({
            // Media controls capabilities
            capabilities: [
              Capability.Play,
              Capability.Pause,
              Capability.SkipToNext,
              Capability.SkipToPrevious,
              Capability.Stop,
            ],

            // Capabilities that will show up when the notification is in the compact form on Android
            compactCapabilities: [
              Capability.Play,
              Capability.Pause
            ],
          });
          await TrackPlayer.add(data)
          await TrackPlayer.skip(currentSong)
          togglePlayback(playbackState)
        }
        catch (e) { }
      }
      setupPlayer()
    })
    // setDataSource(data)
    // console.log('data: ', data);
    console.log('api: ', dataSource);
    // }, [])

    // console.log('dataSource: ', dataSource);

    // React.useEffect(() => {
    console.log('setupPlayer: ', dataSource);
  }, [/* dataSource */])

  console.log('dataSource: ', dataSource);

  async function togglePlayback(playbackState) {
    if (
      playbackState === State.Paused ||
      playbackState === State.Ready ||
      playbackState === State.Buffering ||
      playbackState === State.Connecting
    ) {
      await TrackPlayer.play()
    }
    else {
      await TrackPlayer.pause()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        ref={reactRef}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={dataSource}
        onScroll={async (e) => {
          const x = e.nativeEvent.contentOffset.x / NOW_PLAYING_BASE
          setCurrentSong(parseInt(x.toFixed(0)))
          await TrackPlayer.skip(parseInt(x.toFixed(0)))
          togglePlayback(playbackState)
        }}
        renderItem={({ item, index }) =>
          <View>
            <View style={styles.base}>
              <View style={styles.baseImage}>
                <Image
                  style={styles.imageSong}
                  source={{ uri: item.imageSongUri }}
                />
              </View>
            </View>
            <View style={{ marginBottom: 30, alignItems: 'center' }}>
              <Text style={styles.songName}>{item.title}</Text>
              <Text style={styles.artist}>{item.artist}</Text>
            </View>
          </View>
        }
      />

      <View style={styles.sliderView}>
        <Slider
          value={progress.position}
          maximumValue={progress.duration}
          minimumValue={0}
          thumbStyle={{ width: 20, height: 20 }}
          thumbTintColor='black'
          onValueChange={async (value) => {
            await TrackPlayer.seekTo(value)
          }}
        />
      </View>

      <View style={styles.buttonArea}>
        {/* skip prev a song */}
        <TouchableOpacity
          onPress={async () => {
            if (currentSong > 0) {
              setCurrentSong(currentSong - 1)
              reactRef.current.scrollToIndex({
                animated: true,
                index: currentSong - 1,
              })
              await TrackPlayer.skip(currentSong - 1)
              togglePlayback(playbackState)
            }
          }}
        ><SkipPrev />
        </TouchableOpacity>

        {/* play a song */}
        <TouchableOpacity
          onPress={async () => {
            togglePlayback(playbackState)
          }}
        >{playbackState === State.Paused || playbackState === State.Ready ? <Play48 /> : <Pause48 />}
        </TouchableOpacity>

        {/* skip next a song */}
        <TouchableOpacity
          onPress={async () => {
            if (dataSource.length - 1 > currentSong) {
              setCurrentSong(currentSong + 1)
              reactRef.current.scrollToIndex({
                animated: true,
                index: currentSong + 1,
              })
              await TrackPlayer.skip(currentSong + 1)
              togglePlayback(playbackState)
            }
          }}
        ><SkipNext />
        </TouchableOpacity>
      </View>

      <View style={[styles.buttonArea, { marginBottom: 90 }]}>
        {/* <TouchableOpacity>
          <Repeat32 />
        </TouchableOpacity>
        <TouchableOpacity>
          <Shuffle32 />
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSong: {
    width: NOW_PLAYING_IMAGE,
    height: NOW_PLAYING_IMAGE,
    borderRadius: NOW_PLAYING_IMAGE / 2,
  },
  baseImage: {
    width: NOW_PLAYING_BASE_IMAGE,
    height: NOW_PLAYING_BASE_IMAGE,
    borderRadius: NOW_PLAYING_BASE_IMAGE / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
  },
  base: {
    width: NOW_PLAYING_BASE,
    height: NOW_PLAYING_BASE,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  songName: {
    fontSize: 28,
    marginBottom: 5,
    color: 'black',
    fontWeight: '500',// default 400
  },
  artist: {
    fontSize: 14,
    color: 'gray',
  },
  sliderView: {
    alignSelf: 'center',
    width: '90%',
    marginBottom: 30,
  },
  buttonArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})

export default PlayerTemp