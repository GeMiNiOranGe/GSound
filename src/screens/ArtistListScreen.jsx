import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getArtistList } from '../services/ArtistService';
import ArtistCard from '../components/ArtistCard';
import FullScreenLoader from '../components/FullScreenLoader';
import GSound from '../assets/logos/GSound';

/** @param {RootScreenProps<'ArtistListScreen'>} props */
function ArtistListScreen({ navigation }) {
  /** @type {State<Artist[]>} */
  const [artistList, setArtistList] = React.useState([]);

  React.useEffect(() => {
    fetchArtistList();
  }, [fetchArtistList]);

  const fetchArtistList = React.useCallback(async () => {
    navigation.setOptions({
      headerLeft: renderHeaderLeft,
    });

    const results = await getArtistList();
    setArtistList(results);
  }, [navigation, renderHeaderLeft]);

  const renderHeaderLeft = React.useCallback(
    () => (
      <View style={styles.headerLeftBox}>
        <GSound color="black" />
      </View>
    ),
    [],
  );

  /** @type {import('react-native').ListRenderItem<Artist>} */
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
  headerLeftBox: {
    marginRight: 8,
  },
  contentList: {
    paddingVertical: 8,
  },
});

export default React.memo(ArtistListScreen);
