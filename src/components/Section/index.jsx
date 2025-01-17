import React from 'react';
import { View } from 'react-native';

import SectionLabel from './SectionLabel';
import SectionDivider from './SectionDivider';

/**
 * @param {{
 *    style?: StyleProp<ViewStyle>;
 *    children?: React.ReactNode;
 * }} param0
 */
function Section({ style, children }) {
  return <View style={style}>{children}</View>;
}

Section.Label = SectionLabel;
Section.Divider = SectionDivider;

export default Section;
