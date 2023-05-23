import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Repeat32 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
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
      d="M17 17H8c-1.667 0-5-1-5-5s3.333-5 5-5h8c1.667 0 5 1 5 5 0 1.494-.465 2.57-1.135 3.331"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.5 14.5 17 17l-2.5 2.5"
    />
  </Svg>
)
export default Repeat32
