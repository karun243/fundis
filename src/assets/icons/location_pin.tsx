import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const LocationPinIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={27}
    fill="none"
    {...props}
  >
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 11.68c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"
    />
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14.68a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
);
export default LocationPinIcon;
