import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TrackListScreen from '../screens/TrackListScreen';
import PlayerScreen from '../screens/PlayerScreen';

const Stack = createNativeStackNavigator();

function TrackStack() {
  return (
    <Stack.Navigator initialRouteName="TrackListScreen">
      <Stack.Screen
        name="TrackListScreen"
        component={TrackListScreen}
        options={{
          title: 'List',
        }}
      />

      <Stack.Screen
        name="PlayerScreen"
        component={PlayerScreen}
        options={{
          title: 'Player',
        }}
      />
    </Stack.Navigator>
  );
}

export default TrackStack;
