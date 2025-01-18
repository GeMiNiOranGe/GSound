import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { callArtistList } from '../services/ArtistService';
import ArtistCard from '../components/ArtistCard';

class ArtistListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
    this.renderArtistItem = this.renderArtistItem.bind(this);
  }

  componentDidMount() {
    callArtistList().then(data => this.setState({ artists: data }));
  }

  renderArtistItem({ item, index }) {
    return (
      <ArtistCard
        item={item}
        index={index}
        listLength={this.state.artists.length}
        onPress={() =>
          this.props.navigation.navigate('ArtistDetailScreen', {
            id: item.id,
          })
        }
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentList}
          keyExtractor={item => item.id.toString()}
          data={this.state.artists}
          renderItem={this.renderArtistItem}
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
  contentList: {
    paddingVertical: 8,
  },
});

export default ArtistListScreen;
