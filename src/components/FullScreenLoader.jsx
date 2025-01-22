import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function FullScreenLoader() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5F3',
  },
});

export default FullScreenLoader;
