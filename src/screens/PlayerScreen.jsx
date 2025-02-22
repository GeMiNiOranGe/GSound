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
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import { Pause, Play, SkipNext, SkipPrev } from 'iconoir-react-native';

import { getTrackList } from '../services/TrackService';
import FullScreenLoader from '../components/FullScreenLoader';

const NOW_PLAYING_BASE = Dimensions.get('window').width;
const NOW_PLAYING_IMAGE = Dimensions.get('window').width * 0.75;

/** @param {RootScreenProps<'PlayerScreen'>} props */
function PlayerScreen({ route }) {
  const [trackList, setTrackList] = React.useState(/** @type {Track[]} */ ([]));
  const [currentIndex, setCurrentIndex] = React.useState(route.params.index);

  /** @type {React.RefObject<FlatList<Track>>} */
  const trackListRef = React.useRef(null);
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const fetchTrackList = React.useCallback(async () => {
    const results = await getTrackList();
    setTrackList(results);

    setTimeout(() => {
      trackListRef.current?.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }, 500); // minimum 13

    await TrackPlayer.reset();
    await TrackPlayer.add(results);
    await TrackPlayer.skip(currentIndex);
    await TrackPlayer.play();
  }, [currentIndex]);

  React.useEffect(() => {
    fetchTrackList();
  }, [fetchTrackList]);

  const togglePlayback = React.useCallback(async () => {
    if (!playbackState.state) {
      return;
    }

    [State.Paused, State.Ready, State.Buffering, State.Loading].includes(
      playbackState.state,
    )
      ? await TrackPlayer.play()
      : await TrackPlayer.pause();
  }, [playbackState.state]);

  /**
   * @type {(
   *   event: import('react-native').NativeSyntheticEvent<
   *     import('react-native').NativeScrollEvent
   *   >,
   * ) => void}
   */
  const onMomentumScrollEnd = React.useCallback(
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
      <View style={styles.track}>
        <View style={styles.trackImageBox}>
          <Image
            style={styles.trackImage}
            source={{ uri: item.imageSongUri }}
          />
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
      trackListRef.current?.scrollToIndex({
        animated: true,
        index: currentIndex - 1,
      });

      // FIXME: remove 2 lines code below
      await TrackPlayer.skip(currentIndex - 1);
      await togglePlayback();
    }
  }, [currentIndex, togglePlayback]);

  const onNextTrackPress = React.useCallback(async () => {
    if (trackList.length - 1 > currentIndex) {
      setCurrentIndex(currentIndex + 1);
      trackListRef.current?.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });

      // FIXME: remove 2 lines code below
      await TrackPlayer.skip(currentIndex + 1);
      await togglePlayback();
    }
  }, [currentIndex, togglePlayback, trackList.length]);

  if (!trackList.length) {
    return <FullScreenLoader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          horizontal
          ref={trackListRef}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={onMomentumScrollEnd}
          data={trackList}
          renderItem={renderTrackItem}
        />
      </View>

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
          {playbackState.state &&
          [State.Paused, State.Ready].includes(playbackState.state) ? (
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
  track: {
    width: NOW_PLAYING_BASE,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  trackImageBox: {
    marginTop: 32,
    marginBottom: 16,
    padding: 16,
    borderRadius: 1000,
    backgroundColor: 'white',
    elevation: 10,
  },
  trackImage: {
    width: NOW_PLAYING_IMAGE,
    height: NOW_PLAYING_IMAGE,
    borderRadius: 1000,
  },
  trackNameBox: {
    marginBottom: 16,
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
    marginBottom: 16,
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default React.memo(PlayerScreen);
