import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Arrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="32mm"
    height="32mm"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      d="m13.353 23.475-1.122-1.122 6.352-6.352-6.353-6.354 1.123-1.122L20.828 16z"
      style={{
        strokeWidth: 0.264583,
      }}
    />
  </Svg>
)
export default Arrow
