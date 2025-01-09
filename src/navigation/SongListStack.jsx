// Import liraries
import React from 'react'
import { StyleSheet, } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Import custom components
import SongListScreen from '../screens/SongListScreen'
import PlayerScreen from '../screens/PlayerScreen'

const Stack = createNativeStackNavigator()

// Create a component
class SongListStack extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName='SongListScreen'>
        <Stack.Screen
          name='SongListScreen'
          component={SongListScreen}
          options={{ title: 'List' }}
        />

        <Stack.Screen
          name='PlayerScreen'
          component={PlayerScreen}
        />
      </Stack.Navigator>
    )
  }
}

// Define styles
const styles = StyleSheet.create({})

// Make this component available to the app
export default SongListStack