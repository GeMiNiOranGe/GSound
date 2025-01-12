import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SkipNext = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    strokeWidth={1.5}
    color="#000"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 7v10M6.972 5.267A.6.6 0 0 0 6 5.738v12.524a.6.6 0 0 0 .972.47l7.931-6.261a.6.6 0 0 0 0-.942L6.972 5.267z"
    />
  </Svg>
);

export default SkipNext;
