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

// Import custom libraries
import { callSongList } from "../srcCallApi/Api";
import { songURI } from '../SongURI';

// Create a component
class SongList extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   songs: [],
    // }
    // this.moveToSongDetail = this.moveToSongDetail.bind(this)
  }

  // componentDidMount() {
  //   callSongList().then(data => this.setState({ songs: data }))
  // }

  // moveToSongDetail(data) {
  //   this.props.navigation.navigate('SongPlayer', {
  //     Id: data.Id,
  //   })
  // }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={songURI}
          renderItem={({ item, index }) => <SongItem
            item={item}
            index={index}
            // data={this.state.songs}
          // onPress={this.moveToSongDetail}
          />}
          keyExtractor={item => item.Id}
        />
      </SafeAreaView>
    )
  }
}

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5F3',
  },
  flatList: {
    marginTop: 10,
  },
})

// Make this component available to the app
export default SongList