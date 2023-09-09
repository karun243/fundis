import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const InfoIcon = (props: SvgProps) => (
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
      d="M12 22.68c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 5.523 4.477 10 10 10ZM12 16.68v-4M12 8.68h.01"
    />
  </Svg>
);
export default InfoIcon;
