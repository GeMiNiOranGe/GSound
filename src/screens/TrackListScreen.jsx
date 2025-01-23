import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import TrackCard from '../components/TrackCard';
import { callSongList } from '../services/SongService';

class TrackListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
    this.renderTrackItem = this.renderTrackItem.bind(this);
  }

  componentDidMount() {
    callSongList().then(data => this.setState({ songs: data }));
  }

  renderTrackItem({ item, index }) {
    return (
      <TrackCard
        item={item}
        index={index}
        listLength={this.state.songs.length}
        onPress={() =>
          this.props.navigation.navigate('PlayerScreen', {
            index,
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
          keyExtractor={item => item.id}
          data={this.state.songs}
          renderItem={this.renderTrackItem}
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

export default TrackListScreen;
