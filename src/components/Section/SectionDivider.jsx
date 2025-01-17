import React from 'react';
import { StyleSheet, View } from 'react-native';

function SectionDivider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default SectionDivider;
