import React from 'react';
import Svg, { Path } from 'react-native-svg';

const User = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    strokeWidth={1.5}
    color="#000"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
    />
  </Svg>
);

export default User;
