import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const DeleteIcon = (props: SvgProps) => (
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
      d="M3 6.306h18M19 6.306v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-14m3 0v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11.306v6M14 11.306v6"
    />
  </Svg>
);
export default DeleteIcon;
