// Import liraries
import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

// Import custom components
import PlayerStackScreen from './tabs/playerStack/PlayerStackScreen'

// Import icons
import Headset from '../assets/SVGComponent/Headset'
import User from '../assets/SVGComponent/User'

const Tab = createBottomTabNavigator()

// Create a component
class AppTab extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name='PlayerStackScreen'
            component={PlayerStackScreen}
            options={{
              title: 'Player',
              tabBarIcon: () => <Headset />,
            }}
          />

          {/* <Tab.Screen
            name='Player'
            component={PlayerStackScreen}
            options={{
              title: 'Player',
              tabBarIcon: () => <User />,
            }}
          /> */}
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
export default AppTab