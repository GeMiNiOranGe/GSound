import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  Capability,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

import { getTrackList } from '../services/TrackService';
import Play48 from '../assets/icons/Play48';
import Pause48 from '../assets/icons/Pause48';
import SkipPrev from '../assets/icons/SkipPrev32';
import SkipNext from '../assets/icons/SkipNext32';

const NOW_PLAYING_BASE = Dimensions.get('window').width;
const NOW_PLAYING_IMAGE = Dimensions.get('window').width * 0.75;
const NOW_PLAYING_BASE_IMAGE = Dimensions.get('window').width * 0.825;

/**
 * @param {RootScreenProps<'PlayerScreen'>} props
 */
function PlayerScreen({ route }) {
  /** @type {State<Track[]>} */
  const [trackList, setTrackList] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(route.params.index);

  const trackListRef = React.useRef();
  const playbackState = usePlaybackState();
  const progress = useProgress();

  React.useEffect(() => {
    getTrackList().then(data => {
      setTrackList(data);
      setTimeout(() => {
        trackListRef.current.scrollToIndex({
          animated: true,
          index: currentIndex,
        });
      }, 500); // minimum 13
      setupPlayer(data);
    });
  }, []);

  async function setupPlayer(data) {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
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
      await TrackPlayer.add(data);
      await TrackPlayer.skip(currentIndex);
      togglePlayback();
    } catch (e) {}
  }

  async function togglePlayback() {
    if (
      playbackState === State.Paused ||
      playbackState === State.Ready ||
      playbackState === State.Buffering ||
      playbackState === State.Connecting
    ) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        ref={trackListRef}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={trackList}
        onScroll={async e => {
          const x = e.nativeEvent.contentOffset.x / NOW_PLAYING_BASE;
          const xIndex = parseInt(x.toFixed(0), 10);

          setCurrentIndex(xIndex);
          await TrackPlayer.skip(xIndex);
          togglePlayback();
        }}
        renderItem={({ item, index }) => (
          <View>
            <View style={styles.base}>
              <View style={styles.baseImage}>
                <Image
                  style={styles.imageSong}
                  source={{ uri: item.imageSongUri }}
                />
              </View>
            </View>
            <View style={styles.trackNameBox}>
              <Text style={styles.songName}>{item.title}</Text>
              <Text style={styles.artist}>{item.artist}</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.sliderView}>
        <Slider
          value={progress.position}
          maximumValue={progress.duration}
          minimumValue={0}
          thumbStyle={styles.thumb}
          thumbTintColor="black"
          onValueChange={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
      </View>

      <View style={styles.buttonArea}>
        {/* skip prev a song */}
        <TouchableOpacity
          onPress={async () => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
              trackListRef.current.scrollToIndex({
                animated: true,
                index: currentIndex - 1,
              });
              await TrackPlayer.skip(currentIndex - 1);
              togglePlayback();
            }
          }}
        >
          <SkipPrev />
        </TouchableOpacity>

        {/* play a song */}
        <TouchableOpacity
          onPress={async () => {
            togglePlayback();
          }}
        >
          {playbackState === State.Paused || playbackState === State.Ready ? (
            <Play48 />
          ) : (
            <Pause48 />
          )}
        </TouchableOpacity>

        {/* skip next a song */}
        <TouchableOpacity
          onPress={async () => {
            if (trackList.length - 1 > currentIndex) {
              setCurrentIndex(currentIndex + 1);
              trackListRef.current.scrollToIndex({
                animated: true,
                index: currentIndex + 1,
              });
              await TrackPlayer.skip(currentIndex + 1);
              togglePlayback();
            }
          }}
        >
          <SkipNext />
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
  );
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
  trackNameBox: {
    marginBottom: 30,
    alignItems: 'center',
  },
  songName: {
    fontSize: 28,
    marginBottom: 5,
    color: 'black',
    fontWeight: '500', // default 400
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
  thumb: {
    width: 20,
    height: 20,
  },
  buttonArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default PlayerScreen;
