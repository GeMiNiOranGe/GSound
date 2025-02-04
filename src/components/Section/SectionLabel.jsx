import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * @param {{
 *   style?: StyleProp<ViewStyle>;
 *   name: string;
 *   value: string;
 * }} param0
 */
function SectionLabel({ style, name, value }) {
  return (
    <View style={[styles.label, style]}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginHorizontal: 16,
  },
  name: {
    fontSize: 16,
    color: 'black',
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: 'black',
  },
});

export default React.memo(SectionLabel);
