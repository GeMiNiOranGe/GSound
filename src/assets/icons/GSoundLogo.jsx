import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    overflow="hidden"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path d="M181 160h278v320H181z" />
      </ClipPath>
    </Defs>
    <G
      clipPath="url(#a)"
      style={{
        fill: "#000",
      }}
      transform="matrix(1.6 0 0 1.6 -256 -256)"
    >
      <Path
        fill="#e7e6e6"
        fillRule="evenodd"
        d="m320 160 138.932 79.961-44.106 25.385L320 210.769l-94.894 54.616v109.23L320 429.231l94.894-54.616v-21.509H320v-43.999h139V400l-139 80-139-80V240Z"
        style={{
          fill: "#000",
        }}
      />
    </G>
  </Svg>
)
export default SvgComponent
