// Import liraries
import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native'

// Import custom components
import SongItem from '../srcComponent/SongItem';
import * as Api from "../srcCallApi/Api";

// Create a component
class SongList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
    }
    // this.moveToSongDetail = this.moveToSongDetail.bind(this)
  }

  componentDidMount() {
    Api.callSongList().then(data => this.setState({ songs: data }))
  }

  // moveToSongDetail(data) {
  //   this.props.navigation.navigate('MovieDetail', {
  //     imdbID: data.imdbID,
  //   })
  // }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.songs}
          renderItem={({ item }) => <SongItem
            song={item}
          // onPress={this.moveToSongDetail}
          />}
          keyExtractor={item => item.id}
        />


      </SafeAreaView>
    )
  }
}

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
})

// Make this component available to the app
export default SongList