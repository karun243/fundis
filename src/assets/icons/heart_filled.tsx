import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const HeartFilledIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#A3A3A9"
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.84 5.49a5.5 5.5 0 0 0-7.78 0L12 6.55l-1.06-1.06a5.501 5.501 0 1 0-7.78 7.78l1.06 1.06L12 22.11l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
    />
  </Svg>
);
export default HeartFilledIcon;
