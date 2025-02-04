import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavArrowRight } from 'iconoir-react-native';

const CARD_PADDING = 8;
const CARD_BORDER_RADIUS = 16;
const AVATAR_SIZE = 80;
const AVATAR_BORDER_RADIUS = CARD_BORDER_RADIUS - CARD_PADDING;

/** @param {CardBaseProps<Artist>} props */
function ArtistCard({ item, index, listLength, onPress }) {
  const marginBottom = index === (listLength || 0) - 1 ? 0 : 8;

  return (
    <TouchableHighlight
      style={[styles.card, { marginBottom }]}
      onPress={onPress}
      underlayColor="lightgray"
    >
      <>
        <Image style={styles.avatar} source={{ uri: item.avatar }} />

        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={2}>
            {item.name}
          </Text>
        </View>

        <TouchableOpacity style={styles.navigate} onPress={onPress}>
          <NavArrowRight color="black" width={24} height={24} />
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
  avatar: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_BORDER_RADIUS,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 12,
    marginRight: CARD_PADDING,
  },
  name: {
    fontSize: 20,
    color: 'black',
  },
  navigate: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(ArtistCard);
