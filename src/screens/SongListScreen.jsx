import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native'

import SongItem from '../components/SongItem'
import { callSongList } from '../services/SongService'

class SongListScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
    }
    this.moveToSongDetail = this.moveToSongDetail.bind(this)
  }

  componentDidMount() {
    callSongList().then(data => this.setState({ songs: data }))
  }

  moveToSongDetail(index) {
    this.props.navigation.navigate('PlayerScreen', {
      index: index,
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={this.state.songs}
          renderItem={({ item, index }) => <SongItem
            song={item}
            index={index}
            onPress={this.moveToSongDetail}
          />}
          // keyExtractor={item => item.Id}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5F3',
  },
  flatList: {
    marginTop: 10,
  },
})

export default SongListScreen