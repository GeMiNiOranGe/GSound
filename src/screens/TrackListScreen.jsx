import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getTrackList } from '../services/TrackService';
import TrackCard from '../components/TrackCard';
import FullScreenLoader from '../components/FullScreenLoader';
import GSound from '../assets/logos/GSound';

/** @param {RootScreenProps<'TrackListScreen'>} props */
function TrackListScreen({ navigation }) {
  const [trackList, setTrackList] = React.useState(/** @type {Track[]} */ ([]));

  const renderHeaderLeft = React.useCallback(
    () => (
      <View style={styles.headerLeftBox}>
        <GSound color="black" />
      </View>
    ),
    [],
  );

  const fetchTrackList = React.useCallback(async () => {
    navigation.setOptions({
      headerLeft: renderHeaderLeft,
    });

    const results = await getTrackList();
    setTrackList(results);
  }, [navigation, renderHeaderLeft]);

  React.useEffect(() => {
    fetchTrackList();
  }, [fetchTrackList]);

  /** @type {import('react-native').ListRenderItem<Track>} */
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
  headerLeftBox: {
    marginRight: 8,
  },
  contentList: {
    paddingVertical: 8,
  },
});

export default React.memo(TrackListScreen);
