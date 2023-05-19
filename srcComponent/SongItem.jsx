// Import liraries
import React from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image,
} from 'react-native'

import GSoundNotConnect from "../assets/SVGComponent/GSoundNotConnect";
import Arrow from "../assets/SVGComponent/Arrow";

const FONT_COLOR = 'black'
// Create a component
class SongItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // const imageUri = this.props.song.ImageSongUri !== undefined ?
    //   { uri: this.props.song.ImageSongUri } :
    //   require('../assets/GSound_NotConnect.svg')
    let imageUri
    // let imageUriTemp = this.props.song.ImageSongUri
    if (this.props.song.ImageSongUri !== null && this.props.song.ImageSongUri !== undefined && this.props.song.ImageSongUri !== '')
      imageUri = { uri: this.props.song.ImageSongUri }
    else
      imageUri = require('../assets/GSound_NotConnect.svg')
    return (
      <TouchableHighlight
        style={styles.button}
      // onPress={() => this.props.onPress(this.props.song)}
      >
        <View style={{ flexDirection: 'row'/* , backgroundColor: 'red' */ }}>
          {/* <View style={[styles.image, styles.center]}> */}
          <Image
            style={styles.image}
            source={{ uri: this.props.song.ImageSongUri }}
          />
          {/* <GSoundNotConnect /> */}
          {/* </View> */}

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            {/* song infomation */}
            <View style={styles.songInfo}>
              <Text
                style={styles.songName}
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
              <View style={[styles.nextIcon, styles.center]}>
                <Arrow />
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

// Define styles
const styles = StyleSheet.create({
  button: {
    marginHorizontal: 5,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 2,
  },
  image: {
    height: 96,
    width: 96,
    // backgroundColor: 'pink',
  },
  nextIcon: {
    flex: 1,
    height: 32,
    width: 32,
  },
  songInfo: {
    flex: 7,
    justifyContent: 'center',
    marginLeft: 8,
  },
  songName: {
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