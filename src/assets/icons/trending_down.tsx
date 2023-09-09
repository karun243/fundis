import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const TrendingDownIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <G
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="m23.8 18.056-9.5-9.5-5 5-7.5-7.5" />
      <Path d="M17.8 18.056h6v-6" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.8.056h24v24H.8z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TrendingDownIcon;
