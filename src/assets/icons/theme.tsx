import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ThemeIcon = (props: SvgProps) => (
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
      d="M21 12.842a8.999 8.999 0 0 1-17.746 1.13 9 9 0 0 1 7.956-10.92 7 7 0 0 0 9.79 9.79Z"
    />
  </Svg>
);
export default ThemeIcon;
