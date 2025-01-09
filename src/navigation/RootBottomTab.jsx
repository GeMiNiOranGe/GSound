// Import liraries
import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

// Import custom components
import SongListStack from './SongListStack'
import ArtistStack from './ArtistStack'

// Import icons
import AlbumList from '../assets/icons/AlbumList'
import User from '../assets/icons/User'

const Tab = createBottomTabNavigator()

// Create a component
class RootBottomTab extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName='SongListStack' screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name='SongListStack'
            component={SongListStack}
            options={{
              title: 'List',
              tabBarIcon: () => <AlbumList />,
            }}
          />

          <Tab.Screen
            name='ArtistStack'
            component={ArtistStack}
            options={{
              title: 'Artist',
              tabBarIcon: () => <User />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

// Make this component available to the app
export default RootBottomTab