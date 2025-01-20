import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getArtistList } from '../services/ArtistService';
import ArtistCard from '../components/ArtistCard';

/**
 * @param {RootScreenProps<'ArtistListScreen'>} props
 */
function ArtistListScreen({ navigation }) {
  /**
   * @type {[Artist[], React.Dispatch<React.SetStateAction<Artist[]>>]}
   */
  const [artists, setArtists] = React.useState([]);

  React.useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);

  const fetchArtists = React.useCallback(async () => {
    const results = await getArtistList();
    setArtists(results);
  }, []);

  /**
   * @type {import('react-native').ListRenderItem<Artist>}
   */
  const renderArtistItem = React.useCallback(
    ({ item, index }) => (
      <ArtistCard
        item={item}
        index={index}
        listLength={artists.length}
        onPress={() =>
          navigation.navigate('ArtistDetailScreen', {
            id: item.id,
          })
        }
      />
    ),
    [artists.length, navigation],
  );

  if (!artists) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentList}
        keyExtractor={item => item.id}
        data={artists}
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
