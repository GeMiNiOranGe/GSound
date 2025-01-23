import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TrackStack from './TrackStack';
import ArtistStack from './ArtistStack';
import AlbumList from '../assets/icons/AlbumList';
import User from '../assets/icons/User';

const BottomTab = createBottomTabNavigator();

function RootBottomTab() {
  const renderTrackIcon = React.useCallback(() => <AlbumList />, []);
  const renderArtistIcon = React.useCallback(() => <User />, []);

  return (
    <BottomTab.Navigator
      initialRouteName="TrackStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="TrackStack"
        component={TrackStack}
        options={{
          title: 'Track',
          tabBarIcon: renderTrackIcon,
        }}
      />

      <BottomTab.Screen
        name="ArtistStack"
        component={ArtistStack}
        options={{
          title: 'Artist',
          tabBarIcon: renderArtistIcon,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default RootBottomTab;
