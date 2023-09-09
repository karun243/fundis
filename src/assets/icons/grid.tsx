import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const GridIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 3.056H3v7h7v-7ZM21 3.056h-7v7h7v-7ZM21 14.056h-7v7h7v-7ZM10 14.056H3v7h7v-7Z"
    />
  </Svg>
);
export default GridIcon;
