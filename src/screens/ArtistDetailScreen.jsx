import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { callArtistAt } from '../services/ArtistService';
import Section from '../components/Section';

const IMAGE_SIZE = 125;
const IMAGE_VIEW_SIZE = IMAGE_SIZE * 1.1;
const BORDER_RADIUS = 7;
const MARGIN_TOP = 115;

class ArtistDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    const id = this.props.route.params.id;

    callArtistAt(id).then(data => this.setState(data));
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.backgroundImage}
          blurRadius={6}
          source={{ uri: this.state.avatar }}
        />

        <ScrollView style={styles.absolute}>
          <LinearGradient
            style={{
              height: Dimensions.get('window').height,
              marginTop: MARGIN_TOP,
            }}
            end={{ x: 0.5, y: 0.1 }}
            colors={['transparent', '#E5E5F3']}
          />

          <View style={styles.absolute}>
            <View style={styles.infoMainView}>
              <View style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={{ uri: this.state.avatar }}
                />
              </View>

              <View style={styles.nameView}>
                <Text style={styles.name}>{this.state.name}</Text>
              </View>
            </View>

            <Section style={styles.detailSection}>
              <Section.Label
                name="Years Active"
                value={this.state.yearsActive}
              />
              <Section.Divider />

              <Section.Label name="Genres" value={this.state.genres} />
              <Section.Divider />

              <Section.Label name="Labels" value={this.state.labels} />
              <Section.Divider />

              <Section.Label name="History" value={this.state.history} />
            </Section>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5F3',
  },
  infoMainView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: MARGIN_TOP,
  },
  detailSection: {
    marginTop: 16,
  },
  backgroundImage: {
    height: '70%',
  },
  imageView: {
    height: IMAGE_VIEW_SIZE,
    width: IMAGE_VIEW_SIZE,
    backgroundColor: 'white',
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: BORDER_RADIUS,
  },
  nameView: {
    justifyContent: 'flex-end',
    marginLeft: 10,
    height: IMAGE_VIEW_SIZE,
  },
  name: {
    color: 'black',
    fontSize: 32,
  },
  text: {
    color: 'black',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default ArtistDetailScreen;
