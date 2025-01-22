import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { getArtist } from '../services/ArtistService';
import Section from '../components/Section';
import FullScreenLoader from '../components/FullScreenLoader';

const AVATAR_BOX_BORDER_RADIUS = 8;
const AVATAR_BOX_PADDING = 8;
const AVATAR_SIZE = 120;
const AVATAR_BORDER_RADIUS = AVATAR_BOX_BORDER_RADIUS - AVATAR_BOX_PADDING;
const HEADER_MARGIN_TOP = 120;

/**
 * @param {RootScreenProps<'ArtistDetailScreen'>} props
 */
function ArtistDetailScreen({ navigation, route }) {
  /**
   * @type {[Artist, React.Dispatch<React.SetStateAction<Artist>>]}
   */
  const [artist, setArtist] = React.useState(undefined);

  React.useEffect(() => {
    fetchArtist();
  }, [fetchArtist]);

  const fetchArtist = React.useCallback(async () => {
    const id = route.params.id;
    const result = await getArtist(id);

    navigation.setOptions({ title: result.name });
    setArtist(result);
  }, [navigation, route.params.id]);

  if (!artist) {
    return <FullScreenLoader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.background}
        blurRadius={6}
        source={{ uri: artist.avatar }}
      />

      <ScrollView style={StyleSheet.absoluteFill}>
        <View style={{ height: HEADER_MARGIN_TOP }} />

        <LinearGradient
          style={styles.header}
          end={{ x: 0.5, y: 0.5 }}
          colors={['transparent', '#E5E5F3']}
        >
          <View style={styles.avatarBox}>
            <Image style={styles.avatar} source={{ uri: artist.avatar }} />
          </View>

          <View style={styles.nameBox}>
            <Text style={styles.name} numberOfLines={2}>
              {artist.name}
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <Section>
            <Section.Label name="Years Active" value={artist.yearsActive} />
            <Section.Divider />

            <Section.Label name="Genres" value={artist.genres} />
            <Section.Divider />

            <Section.Label name="Labels" value={artist.labels} />
            <Section.Divider />

            <Section.Label name="History" value={artist.history} />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5F3',
  },
  background: {
    height: '50%',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  avatarBox: {
    backgroundColor: 'white',
    borderRadius: AVATAR_BOX_BORDER_RADIUS,
    elevation: 5,
    padding: AVATAR_BOX_PADDING,
  },
  avatar: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_BORDER_RADIUS,
  },
  nameBox: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 10,
  },
  name: {
    color: 'black',
    fontSize: 28,
  },
  content: {
    backgroundColor: '#E5E5F3',
    paddingVertical: 8,
  },
});

export default ArtistDetailScreen;
