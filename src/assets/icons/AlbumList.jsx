import React from 'react';
import Svg, { Path } from 'react-native-svg';

const AlbumList = (props) => (
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
      d="M2 17.4V2.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      d="M8 22h13.4a.6.6 0 0 0 .6-.6V8m-11 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 0V6.6a.6.6 0 0 1 .6-.6H13"
    />
  </Svg>
);

export default AlbumList;
