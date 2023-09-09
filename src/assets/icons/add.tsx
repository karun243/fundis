import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const AddIcon = (props: SvgProps) => (
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
      d="M12 22.454c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10ZM12 8.454v8M8 12.454h8"
    />
  </Svg>
);
export default AddIcon;
