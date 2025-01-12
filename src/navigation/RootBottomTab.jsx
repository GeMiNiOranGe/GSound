import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import SongListStack from './SongListStack';
import ArtistStack from './ArtistStack';
import AlbumList from '../assets/icons/AlbumList';
import User from '../assets/icons/User';

const Tab = createBottomTabNavigator();

class RootBottomTab extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="SongListStack" screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="SongListStack"
            component={SongListStack}
            options={{
              title: 'List',
              tabBarIcon: () => <AlbumList />,
            }}
          />

          <Tab.Screen
            name="ArtistStack"
            component={ArtistStack}
            options={{
              title: 'Artist',
              tabBarIcon: () => <User />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default RootBottomTab;
