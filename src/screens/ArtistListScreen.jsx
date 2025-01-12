import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { callArtistList } from '../services/ArtistService';
import ArtistItem from '../components/ArtistItem';

class ArtistListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
    this.moveToInfoDetail = this.moveToInfoDetail.bind(this);
  }

  componentDidMount() {
    callArtistList().then(data => this.setState({ artists: data }));
  }

  moveToInfoDetail(data) {
    this.props.navigation.navigate('ArtistDetailScreen', {
      id: data.id,
    });
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
    );
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
});

export default ArtistListScreen;
