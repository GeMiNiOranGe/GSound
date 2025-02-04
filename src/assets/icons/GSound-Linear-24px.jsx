import React from 'react';
import Svg, { Path } from 'react-native-svg';

function GSound({ size = 24, color = 'black', ...props }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="m19.59 7.64-7.597-4.39-7.582 4.383v8.744l7.565 4.373 7.567-4.374v-3.861h-7.041"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default React.memo(GSound);
