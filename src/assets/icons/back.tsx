import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const BackIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m9.608 6.083-6.07 6.07 6.07 6.07m10.93-6.07H3.708"
    />
  </Svg>
);
export default BackIcon;
