// Import liraries
import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ArtistList from './screens/ArtistList'
import InfoDetail from './screens/InfoDetail'

const ArtistStack = createNativeStackNavigator()

// Create a component
class ArtistStackScreen extends React.Component {
  render() {
    return (
      <ArtistStack.Navigator>
        <ArtistStack.Screen
          name='ArtistList'
          component={ArtistList}
          options={{ title: 'List' }}
        />

        <ArtistStack.Screen
          name='InfoDetail'
          component={InfoDetail}
          options={{ title: 'Information' }}
        />
      </ArtistStack.Navigator>
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
export default ArtistStackScreen