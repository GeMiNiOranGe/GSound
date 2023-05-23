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
import TrackPlayer, { Capability } from 'react-native-track-player';

// Import custom libraries
import { callSongAt, callSongList } from '../srcCallApi/Api';
import Play from "../../assets/SVGComponent/Play32";
import SkipPrev from "../../assets/SVGComponent/SkipPrev32";
import SkipNext from "../../assets/SVGComponent/SkipNext32";
import Repeat32 from '../../assets/SVGComponent/Repeat32';
import Shuffle32 from '../../assets/SVGComponent/Shuffle32';
import { useRoute } from '@react-navigation/native';
import { songURI } from '../SongURI';

const NOW_PLAYING_BASE = Dimensions.get('window').width
const NOW_PLAYING_IMAGE = Dimensions.get('window').width * 0.75
const NOW_PLAYING_BASE_IMAGE = Dimensions.get('window').width * 0.825

// Create a component
function Music() {
  const route = useRoute()
  const reactRef = React.useRef()
  const data = route.params.data
  const [currentSong, setCurrentSong] = React.useState(route.params.index);

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     songs: [],
  //     currentSong: this.props.route.params.index,
  //   }

  // const Id = this.props.route.params.Id;
  // callSongAt(Id).then(data => this.setState(data))
  // }

  React.useEffect(() => {
    setTimeout(() => {
      reactRef.current.scrollToIndex({
        animated: true,
        index: currentSong,
      })
    }, 500)// minimum 13
    setupPlayer()
  }, [])

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
        compactCapabilities: [Capability.Play, Capability.Pause],
      });
      await TrackPlayer.add(songURI)
    }
    catch (e) { }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        ref={reactRef}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={songURI}
        renderItem={({ item, index }) =>
          <View style={styles.base}>
            <View style={styles.baseImage}>
              <Image
                style={styles.imageSong}
                source={item.ImageSongUri}
              />
            </View>
          </View>
        }
      />

      <View style={{ marginBottom: 30, alignItems: 'center' }}>
        <Text style={styles.songName}>{data.SongName}</Text>
        <Text style={styles.artist}>{data.Artist}</Text>
      </View>

      <View style={styles.sliderView}>
        <Slider />
      </View>

      <View style={styles.buttonArea}>
        {/* skip prev a song */}
        <TouchableOpacity
          onPress={() => {
            if (currentSong > 0) {
              setCurrentSong(currentSong - 1)
              reactRef.current.scrollToIndex({
                animated: true,
                index: currentSong - 1,
              })
            }
          }}
        ><SkipPrev />
        </TouchableOpacity>

        {/* play a song */}
        <TouchableOpacity
          onPress={async () => {
            await TrackPlayer.skip(1)
            await TrackPlayer.play()
          }}
        ><Play />
        </TouchableOpacity>

        {/* skip next a song */}
        <TouchableOpacity
          onPress={() => {
            if (songURI.length - 1 > currentSong) {
              setCurrentSong(currentSong + 1)
              reactRef.current.scrollToIndex({
                animated: true,
                index: currentSong + 1,
              })
            }
          }}
        ><SkipNext />
        </TouchableOpacity>
      </View>

      <View style={[styles.buttonArea, { marginBottom: 90 }]}>
        <TouchableOpacity>
          <Repeat32 />
        </TouchableOpacity>
        <TouchableOpacity>
          <Shuffle32 />
        </TouchableOpacity>
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

export default Music