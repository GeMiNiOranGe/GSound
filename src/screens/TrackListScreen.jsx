import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getTrackList } from '../services/TrackService';
import TrackCard from '../components/TrackCard';
import FullScreenLoader from '../components/FullScreenLoader';

/**
 * @param {RootScreenProps<'TrackListScreen'>} props
 */
function TrackListScreen({ navigation }) {
  /**
   * @type {[Track[], React.Dispatch<React.SetStateAction<Track[]>>]}
   */
  const [trackList, setTrackList] = React.useState([]);

  React.useEffect(() => {
    fetchTrackList();
  }, [fetchTrackList]);

  const fetchTrackList = React.useCallback(async () => {
    const results = await getTrackList();
    setTrackList(results);
  }, []);

  /**
   * @type {import('react-native').ListRenderItem<Track>}
   */
  const renderTrackItem = React.useCallback(
    ({ item, index }) => (
      <TrackCard
        item={item}
        index={index}
        listLength={trackList.length}
        onPress={() =>
          navigation.navigate('PlayerScreen', {
            index,
          })
        }
      />
    ),
    [navigation, trackList.length],
  );

  if (!trackList.length) {
    return <FullScreenLoader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentList}
        keyExtractor={item => item.id}
        data={trackList}
        renderItem={renderTrackItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5F3',
  },
  contentList: {
    paddingVertical: 8,
  },
});

export default TrackListScreen;
