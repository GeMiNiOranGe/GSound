import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SongListScreen from '../screens/SongListScreen';
import PlayerScreen from '../screens/PlayerScreen';

const Stack = createNativeStackNavigator();

function SongListStack() {
  return (
    <Stack.Navigator initialRouteName="SongListScreen">
      <Stack.Screen
        name="SongListScreen"
        component={SongListScreen}
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

export default SongListStack;
