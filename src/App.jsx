// Import liraries
import React from 'react'
import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import custom components
import SongList from "./screen/SongList";
import SongPlayer from "./screen/SongPlayer";
import LikedSongList from './screen/LikedSongList';

const Screen = createNativeStackNavigator()

// Create a component
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Screen.Navigator>
          <Screen.Screen
            name='SongList'
            component={SongList}
            options={{ title: 'List', }}
          />

          <Screen.Screen
            name='SongPlayer'
            component={SongPlayer}
            options={{ title: 'Player', }}
          />

          <Screen.Screen
            name='LikedSongList'
            component={LikedSongList}
            options={{ title: 'Liked song', }}
          />
        </Screen.Navigator>
      </NavigationContainer>
    )
  }
}

// Define styles
const styles = StyleSheet.create({

})

// Make this component available to the app
export default App