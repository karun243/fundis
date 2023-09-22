import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PlusIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#C36F2A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.065 8.999v8M8.065 12.998h8"
    />
  </Svg>
);
export default PlusIcon;
