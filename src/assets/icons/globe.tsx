import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const GlobeIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <G
      stroke={props.stroke ?? "#A3A3A9"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M12.404 22.305c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 5.523 4.477 10 10 10Z" />
      <Path d="M8.404 3.306h1a28.424 28.424 0 0 0 0 18h-1m7-18a28.423 28.423 0 0 1 0 18" />
      <Path d="M3.404 16.305v-1a28.424 28.424 0 0 0 18 0v1m-18-7a28.424 28.424 0 0 1 18 0" />
    </G>
  </Svg>
);
export default GlobeIcon;
