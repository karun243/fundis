import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const TickIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m9.415 12.731 5.717 5.724L26.585 7.008"
    />
  </Svg>
);
export default TickIcon;
