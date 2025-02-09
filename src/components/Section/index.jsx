import React from 'react';
import { View } from 'react-native';

import SectionLabel from './SectionLabel';
import SectionDivider from './SectionDivider';

/**
 * @param {{
 *   style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
 *   children?: React.ReactNode;
 * }} param0
 */
function Section({ style, children }) {
  return <View style={style}>{children}</View>;
}

export default Object.assign(React.memo(Section), {
  Label: SectionLabel,
  Divider: SectionDivider,
});
