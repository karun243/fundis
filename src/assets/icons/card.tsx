import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CardIcon = (props: SvgProps) => (
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
      d="M21 4.153H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2ZM1 10.153h22"
    />
  </Svg>
);
export default CardIcon;
