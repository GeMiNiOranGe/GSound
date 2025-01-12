import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MusicDoubleNote = (props) => (
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
      d="M20 14V3L9 5v11"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 19h1a2 2 0 0 0 2-2v-3h-3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2zM6 21h1a2 2 0 0 0 2-2v-3H6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2z"
    />
  </Svg>
);

export default MusicDoubleNote;
