import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ArtistListScreen from '../screens/ArtistListScreen';
import ArtistDetailScreen from '../screens/ArtistDetailScreen';

const Stack = createNativeStackNavigator();

class ArtistStack extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="ArtistListScreen">
        <Stack.Screen
          name="ArtistListScreen"
          component={ArtistListScreen}
          options={{ title: 'List' }}
        />

        <Stack.Screen
          name="ArtistDetailScreen"
          component={ArtistDetailScreen}
          options={{ title: 'Information' }}
        />
      </Stack.Navigator>
    );
  }
}

export default ArtistStack;
