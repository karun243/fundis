import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const DemonstrationIcon = (props: SvgProps) => (
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
      d="m23 7.806-7 5 7 5v-10ZM14 5.806H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2Z"
    />
  </Svg>
);
export default DemonstrationIcon;
