import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Play } from 'iconoir-react-native';

const CARD_PADDING = 8;
const CARD_BORDER_RADIUS = 16;
const IMAGE_SIZE = 64;

/**
 * @param {CardBaseProps<Track>} props
 */
function TrackCard({ item, index, listLength, onPress }) {
  const marginBottom = index === (listLength || 0) - 1 ? 0 : 8;

  return (
    <TouchableHighlight
      style={[styles.card, { marginBottom }]}
      onPress={onPress}
      underlayColor={'lightgray'}
    >
      <>
        <Image style={styles.image} source={{ uri: item.imageSongUri }} />

        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>
            {item.title}
          </Text>

          <Text style={styles.artist} numberOfLines={1}>
            {item.artist}
          </Text>
        </View>

        <TouchableOpacity style={styles.navigate} onPress={onPress}>
          <Play color="black" width={24} height={24} />
        </TouchableOpacity>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: CARD_PADDING,
    marginHorizontal: 8,
    borderRadius: CARD_BORDER_RADIUS,
    elevation: 5,
    backgroundColor: 'white',
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: 1000,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 12,
    marginRight: CARD_PADDING,
  },
  name: {
    fontSize: 16,
    color: 'black',
    marginBottom: 4,
  },
  artist: {
    fontSize: 14,
    color: 'gray',
  },
  navigate: {
    marginHorizontal: CARD_PADDING,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TrackCard;
