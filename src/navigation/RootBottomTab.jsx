import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AlbumList, User } from 'iconoir-react-native';

import TrackStack from './TrackStack';
import ArtistStack from './ArtistStack';

const BottomTab = createBottomTabNavigator();

function RootBottomTab() {
  /** @type {TabBarIcon} */
  const renderTrackIcon = React.useCallback(
    ({ color, size }) => <AlbumList color={color} width={size} height={size} />,
    [],
  );

  /** @type {TabBarIcon} */
  const renderArtistIcon = React.useCallback(
    ({ color, size }) => <User color={color} width={size} height={size} />,
    [],
  );

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

export default React.memo(RootBottomTab);
