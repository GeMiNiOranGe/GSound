// Import liraries
import React from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image,
} from 'react-native'

// Import custom components
import Arrow from "../../assets/SVGComponent/Arrow";

const FONT_COLOR = 'black'
const IMAGE_SIZE = 72
const SPACE_BETWEEN_COMPONENTS = 8

// Create a component
class SongItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
      // onPress={() => this.props.onPress(this.props.song)}
      >
        <View style={styles.song}>
          {/* song image */}
          <Image
            style={styles.image}
            source={{ uri: this.props.song.ImageSongUri }}
          />

          {/* song infomation */}
          <View style={styles.info}>
            <Text
              style={styles.name}
              numberOfLines={1}>
              {this.props.song.SongName}
            </Text>

            <Text
              style={styles.artist}
              numberOfLines={1}>
              {this.props.song.Artist}
            </Text>
          </View>

          {/* play this song */}
          <View style={styles.center}>
            <Arrow />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

// Define styles
const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 7,
  },
  song: {
    flexDirection: 'row',
    padding: SPACE_BETWEEN_COMPONENTS,
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    borderColor: 'white',
    borderWidth: 3,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: SPACE_BETWEEN_COMPONENTS,
  },
  name: {
    fontSize: 20,
    marginBottom: 5,
    color: FONT_COLOR,
  },
  artist: {
    fontSize: 13,
    color: FONT_COLOR,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

// Make this component available to the app
export default SongItem