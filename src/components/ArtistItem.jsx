// Import liraries
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native'
import Arrow from '../assets/icons/Arrow'

const IMAGE_SIZE = 96
const SPACE_BETWEEN_COMPONENTS = 8
const BORDER_RADIUS = 7

// Create a component
class ArtistItem extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          this.props.onPress(this.props.artist)
        }}
        underlayColor={'pink'}
      >
        <View style={styles.artistView}>
          <Image
            style={styles.image}
            source={{ uri: this.props.artist.avatar }}
          />

          <View style={styles.info}>
            <Text
              style={styles.artistName}
              numberOfLines={1}>
              {this.props.artist.name}
            </Text>
          </View>

          <View style={styles.nextIcon}><Arrow /></View>
        </View>
      </TouchableHighlight>
    )
  }
}

// Define styles
const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: BORDER_RADIUS,
    elevation: 7,
    backgroundColor: 'white',
  },
  artistView: {
    flexDirection: 'row',
    padding: SPACE_BETWEEN_COMPONENTS,
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: BORDER_RADIUS,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: SPACE_BETWEEN_COMPONENTS * 2,
  },
  artistName: {
    fontSize: 24,
    color: 'black',
    fontWeight: '500',// default 400
  },
  nextIcon: {
    marginHorizontal: SPACE_BETWEEN_COMPONENTS,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

// Make this component available to the app
export default ArtistItem