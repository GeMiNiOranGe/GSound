// Import liraries
import React from 'react'
import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import custom components
import SongList from "./screen/SongList";
import SongPlayer from "./screen/SongPlayer";
import SongPlayList from './screen/SongPlayList';
import MusicDoubleNote from "../assets/SVGComponent/MusicDoubleNote";
import Headset from "../assets/SVGComponent/Headset";
import AlbumList from "../assets/SVGComponent/AlbumList";

const Tab = createBottomTabNavigator()

// Create a component
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name='SongList'
            component={SongList}
            options={{
              title: 'List',
              tabBarIcon: () => <AlbumList />,
            }}
          />

          <Tab.Screen
            name='SongPlayer'
            component={SongPlayer}
            options={{ 
              title: 'Player',
              tabBarIcon: () => <Headset />,
            }}
          />

          <Tab.Screen
            name='SongPlayList'
            component={SongPlayList}
            options={{
               title: 'Playlist',
               tabBarIcon: () => <MusicDoubleNote />,
              }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

// Define styles
const styles = StyleSheet.create({

})

// Make this component available to the app
export default App