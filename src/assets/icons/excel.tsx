import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ExcelIcon = (props: SvgProps) => (
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
      d="M4 8.306v-4.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4.5"
    />
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeWidth={2}
      d="M15.5 8.306H17m-3 4h3m-3 4h3"
    />
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5 11.306 3 3m0-3-3 3m-3-6h9v9H2v-9Z"
    />
  </Svg>
);
export default ExcelIcon;
