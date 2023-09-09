import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const GlobeIcon = (props: SvgProps) => (
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
      strokeWidth={1.5}
      d="M12 22.306c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
    />
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 3.306h1a28.424 28.424 0 0 0 0 18H8m7-18a28.425 28.425 0 0 1 0 18"
    />
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 16.306v-1a28.424 28.424 0 0 0 18 0v1m-18-7a28.424 28.424 0 0 1 18 0"
    />
  </Svg>
);
export default GlobeIcon;
