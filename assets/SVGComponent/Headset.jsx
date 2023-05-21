import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Headset = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
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
      d="M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 17.439v-1.877a2 2 0 0 1 1.515-1.94L4 13.5l1.254-.314a.6.6 0 0 1 .746.582v5.464a.6.6 0 0 1-.746.582l-1.74-.435A2 2 0 0 1 2 17.439zm20 0v-1.877a2 2 0 0 0-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 0 0-.745.582v5.464a.6.6 0 0 0 .745.582l1.74-.435A2 2 0 0 0 22 17.439z"
    />
  </Svg>
)
export default Headset
