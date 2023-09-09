import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CalendarIcon = (props: SvgProps) => (
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
      strokeWidth={2}
      d="M19 4.306H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2ZM16 2.306v4M8 2.306v4M3 10.306h18"
    />
  </Svg>
);
export default CalendarIcon;
