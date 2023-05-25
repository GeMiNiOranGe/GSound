// Import liraries
import React from 'react'
import { StyleSheet, } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Import custom components
import SongList from './screens/SongList'
import Music from './screens/Music'

const PlayerStack = createNativeStackNavigator()

// Create a component
class PlayerStackScreen extends React.Component {
  render() {
    return (
      <PlayerStack.Navigator>
        <PlayerStack.Screen
          name='SongList'
          component={SongList}
          options={{ title: 'List' }}
        />

        <PlayerStack.Screen
          name='Music'
          component={Music}
        />
      </PlayerStack.Navigator>
    )
  }
}

// Define styles
const styles = StyleSheet.create({})

// Make this component available to the app
export default PlayerStackScreen