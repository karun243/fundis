import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const AwardIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15.218a6.065 6.065 0 1 0 0-12.13 6.065 6.065 0 0 0 0 12.13Z"
    />
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.716 14.257 7.668 22.15 12 19.55l4.333 2.6-1.049-7.902"
    />
  </Svg>
);
export default AwardIcon;
