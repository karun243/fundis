import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const KeyIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20.8 1.88-2 2m0 0 3 3-3.5 3.5-3-3m3.5-3.5-3.5 3.5m-4.11 4.11a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777v-.001Zm0 0 4.11-4.11"
    />
  </Svg>
);
export default KeyIcon;
