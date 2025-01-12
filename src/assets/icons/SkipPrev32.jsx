import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SkipPrev = (props) => (
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
      d="M6 7v10M17.028 5.267a.6.6 0 0 1 .972.471v12.524a.6.6 0 0 1-.972.47l-7.931-6.261a.6.6 0 0 1 0-.942l7.931-6.262z"
    />
  </Svg>
);

export default SkipPrev;
