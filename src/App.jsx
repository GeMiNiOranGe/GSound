import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

import RootBottomTab from './navigation/RootBottomTab';

function App() {
  const onReady = React.useCallback(
    async () => await BootSplash.hide({ fade: true }),
    [],
  );

  return (
    <NavigationContainer onReady={onReady}>
      <RootBottomTab />
    </NavigationContainer>
  );
}

export default React.memo(App);
