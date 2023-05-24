// Import liraries
import React from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image,
} from 'react-native'
import { useNavigation } from "@react-navigation/native";

// Import custom components
import PlaySmall from "../../assets/SVGComponent/Play24";

const IMAGE_SIZE = 64
const SPACE_BETWEEN_COMPONENTS = 8

// Create a component
function SongItem({ item, index }) {
  const navigation = useNavigation()
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() =>
        navigation.navigate('Music', {
          data: item,
          index: index,
        })
      }
      underlayColor={'pink'}
    >
      <View style={styles.song}>
        {/* song image */}
        <Image
          style={styles.image}
          source={item.imageSongUri}
        />

        {/* song infomation */}
        <View style={styles.info}>
          <Text
            style={styles.songName}
            numberOfLines={1}>
            {item.title}
          </Text>

          <Text
            style={styles.artist}
            numberOfLines={1}>
            {item.artist}
          </Text>
        </View>

        {/* play this song */}
        <View style={styles.platIcon}>
          <PlaySmall />
        </View>
      </View>
    </TouchableHighlight>
  )
}

// Define styles
const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 7,
    elevation: 7,
    backgroundColor: 'white',
  },
  song: {
    flexDirection: 'row',
    padding: SPACE_BETWEEN_COMPONENTS,
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: SPACE_BETWEEN_COMPONENTS,
  },
  songName: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
    fontWeight: '500',// default 400
  },
  artist: {
    fontSize: 12,
    color: 'gray',
  },
  platIcon: {
    marginHorizontal: SPACE_BETWEEN_COMPONENTS,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

// Make this component available to the app
export default SongItem