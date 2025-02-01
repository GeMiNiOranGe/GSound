import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  Capability,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import { Pause, Play, SkipNext, SkipPrev } from 'iconoir-react-native';

import { getTrackList } from '../services/TrackService';

const NOW_PLAYING_BASE = Dimensions.get('window').width;
const NOW_PLAYING_IMAGE = Dimensions.get('window').width * 0.75;

/** @param {RootScreenProps<'PlayerScreen'>} props */
function PlayerScreen({ route }) {
  /** @type {State<Track[]>} */
  const [trackList, setTrackList] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(route.params.index);

  /** @type {React.MutableRefObject<FlatList>} */
  const trackListRef = React.useRef();
  const playbackState = usePlaybackState();
  const progress = useProgress();

  React.useEffect(() => {
    fetchTrackList();
  }, [fetchTrackList]);

  const fetchTrackList = React.useCallback(async () => {
    const results = await getTrackList();
    setTrackList(results);
    setTimeout(() => {
      trackListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }, 500); // minimum 13
    await setupPlayer(results);
  }, [currentIndex, setupPlayer]);

  /** @type {(tracks: Track[]) => Promise<void>} */
  const setupPlayer = React.useCallback(
    async tracks => {
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(tracks);
        await TrackPlayer.skip(currentIndex);
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

        await togglePlayback();
      } catch (e) {}
    },
    [currentIndex, togglePlayback],
  );

  const togglePlayback = React.useCallback(async () => {
    [State.Paused, State.Ready, State.Buffering, State.Connecting].includes(
      playbackState,
    )
      ? await TrackPlayer.play()
      : await TrackPlayer.pause();
  }, [playbackState]);

  /**
   * @type {(
   *   event: import('react-native').NativeSyntheticEvent<
   *     import('react-native').NativeScrollEvent
   *   >,
   * ) => void}
   */
  const onScroll = React.useCallback(
    async e => {
      const x = e.nativeEvent.contentOffset.x / NOW_PLAYING_BASE;
      const xIndex = parseInt(x.toFixed(0), 10);

      setCurrentIndex(xIndex);
      await TrackPlayer.skip(xIndex);
      await togglePlayback();
    },
    [togglePlayback],
  );

  /** @type {import('react-native').ListRenderItem<Track>} */
  const renderTrackItem = React.useCallback(
    ({ item }) => (
      <View style={styles.base}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{ uri: item.imageSongUri }} />
        </View>

        <View style={styles.trackNameBox}>
          <Text style={styles.trackName}>{item.title}</Text>
          <Text style={styles.trackArtist}>{item.artist}</Text>
        </View>
      </View>
    ),
    [],
  );

  /** @type {(value: number) => void} */
  const onValueChange = React.useCallback(async value => {
    await TrackPlayer.seekTo(value);
  }, []);

  const onPreviousTrackPress = React.useCallback(async () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      trackListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex - 1,
      });

      await TrackPlayer.skip(currentIndex - 1);
      await togglePlayback();
    }
  }, [currentIndex, togglePlayback]);

  const onNextTrackPress = React.useCallback(async () => {
    if (trackList.length - 1 > currentIndex) {
      setCurrentIndex(currentIndex + 1);
      trackListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });

      await TrackPlayer.skip(currentIndex + 1);
      await togglePlayback();
    }
  }, [currentIndex, togglePlayback, trackList.length]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        ref={trackListRef}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        data={trackList}
        renderItem={renderTrackItem}
      />

      <Slider
        style={styles.sliderBox}
        value={progress.position}
        maximumValue={progress.duration}
        minimumValue={0}
        thumbTintColor="black"
        onValueChange={onValueChange}
      />

      <View style={styles.buttonArea}>
        <TouchableOpacity onPress={onPreviousTrackPress}>
          <SkipPrev color="black" width={32} height={32} />
        </TouchableOpacity>

        <TouchableOpacity onPress={togglePlayback}>
          {[State.Paused, State.Ready].includes(playbackState) ? (
            <Play color="black" width={48} height={48} />
          ) : (
            <Pause color="black" width={48} height={48} />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={onNextTrackPress}>
          <SkipNext color="black" width={32} height={32} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5F3',
  },
  base: {
    width: NOW_PLAYING_BASE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    marginTop: 32,
    marginBottom: 16,
    padding: 16,
    borderRadius: 1000,
    backgroundColor: 'white',
    elevation: 10,
  },
  image: {
    width: NOW_PLAYING_IMAGE,
    height: NOW_PLAYING_IMAGE,
    borderRadius: 1000,
  },
  trackNameBox: {
    marginBottom: 32,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  trackName: {
    fontSize: 24,
    marginBottom: 5,
    color: 'black',
    textAlign: 'center',
  },
  trackArtist: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  sliderBox: {
    alignSelf: 'center',
    width: '90%',
    marginBottom: 8,
  },
  buttonArea: {
    marginBottom: 48,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default PlayerScreen;
