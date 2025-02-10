import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';

import RootBottomTab from './navigation/RootBottomTab';

function App() {
  const initializeTrackPlayer = React.useCallback(async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior:
            AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
        // Media controls capabilities
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [Capability.Play, Capability.Pause],
      });
    } catch (error) {}
  }, []);

  React.useEffect(() => {
    initializeTrackPlayer();
  }, [initializeTrackPlayer]);

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
