// Import liraries
import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native'
import { useFocusEffect } from "@react-navigation/native";
// Import custom libraries
import { callSongAt } from '../srcCallApi/Api';

// Create a component
class SongPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    const Id = this.props.route.params.Id;
    callSongAt(Id).then(data => this.setState(data))
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.songName}>{this.state.SongName}</Text>
        <Text style={styles.artist}>{this.state.Artist}</Text>


      </SafeAreaView>
    )
  }
}

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  songName: {
    fontSize: 28,
    marginBottom: 5,
    color: 'black',
    fontWeight: '500',// default 400
  },
  artist: {
    fontSize: 14,
    color: 'gray',
  },
})

// Make this component available to the app
export default SongPlayer