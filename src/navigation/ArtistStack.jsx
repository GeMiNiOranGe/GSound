// Import liraries
import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ArtistListScreen from '../screens/ArtistListScreen'
import ArtistDetailScreen from '../screens/ArtistDetailScreen'

const Stack = createNativeStackNavigator()

// Create a component
class ArtistStack extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName='ArtistListScreen'>
        <Stack.Screen
          name='ArtistListScreen'
          component={ArtistListScreen}
          options={{ title: 'List' }}
        />

        <Stack.Screen
          name='ArtistDetailScreen'
          component={ArtistDetailScreen}
          options={{ title: 'Information' }}
        />
      </Stack.Navigator>
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
export default ArtistStack