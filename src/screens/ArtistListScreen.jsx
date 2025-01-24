import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getArtistList } from '../services/ArtistService';
import ArtistCard from '../components/ArtistCard';
import FullScreenLoader from '../components/FullScreenLoader';

/**
 * @param {RootScreenProps<'ArtistListScreen'>} props
 */
function ArtistListScreen({ navigation }) {
  /**
   * @type {[Artist[], React.Dispatch<React.SetStateAction<Artist[]>>]}
   */
  const [artistList, setArtistList] = React.useState([]);

  React.useEffect(() => {
    fetchArtistList();
  }, [fetchArtistList]);

  const fetchArtistList = React.useCallback(async () => {
    const results = await getArtistList();
    setArtistList(results);
  }, []);

  /**
   * @type {import('react-native').ListRenderItem<Artist>}
   */
  const renderArtistItem = React.useCallback(
    ({ item, index }) => (
      <ArtistCard
        item={item}
        index={index}
        listLength={artistList.length}
        onPress={() =>
          navigation.navigate('ArtistDetailScreen', {
            id: item.id,
          })
        }
      />
    ),
    [artistList.length, navigation],
  );

  if (!artistList.length) {
    return <FullScreenLoader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentList}
        keyExtractor={item => item.id}
        data={artistList}
        renderItem={renderArtistItem}
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

export default ArtistListScreen;
