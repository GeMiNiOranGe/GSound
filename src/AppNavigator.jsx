import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Music from './screens/Music'

const Stack = createNativeStackNavigator()

// Create a component
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Music' component={Music}/>
        {/* <Stack.Screen name='Home' component={Home}/> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

// Make this component available to the app
export default AppNavigator
/* // Import liraries
import React from 'react'
import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import custom components
import SongList from "./src/screen/SongList";
import SongPlayer from "./src/screen/SongPlayer";
import LikedSongList from './src/screen/LikedSongList';

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
export default App */