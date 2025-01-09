import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Shuffle32 = (props) => (
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
      d="M22 7c-3 0-8.5 0-10.5 5.5S5 18 2 18"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m20 5 2 2-2 2m2 9c-3 0-8.5 0-10.5-5.5S5 7 2 7"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m20 20 2-2-2-2"
    />
  </Svg>
)
export default Shuffle32
