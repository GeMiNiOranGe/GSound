// Import liraries
import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native'
import { callArtistList } from '../services/ArtistService'
import ArtistItem from '../components/ArtistItem'

// Create a component
class ArtistListScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: [],
    }
    this.moveToInfoDetail = this.moveToInfoDetail.bind(this)
  }

  componentDidMount() {
    callArtistList().then(data => this.setState({ artists: data }))
  }

  moveToInfoDetail(data) {
    this.props.navigation.navigate('ArtistDetailScreen', {
      id: data.id,
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={this.state.artists}
          renderItem={({ item, index }) => <ArtistItem
            artist={item}
            onPress={this.moveToInfoDetail}
          />}
        // keyExtractor={item => item.Id}
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
export default ArtistListScreen