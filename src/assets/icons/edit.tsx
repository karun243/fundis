import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const EditIcon = (props: SvgProps) => (
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
      d="M11 4.68H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
    />
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.5 3.18a2.121 2.121 0 1 1 3 3l-9.5 9.5-4 1 1-4 9.5-9.5Z"
    />
  </Svg>
);
export default EditIcon;
