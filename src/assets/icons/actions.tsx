import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ActionsIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.608 13.88a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12.608 6.88a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12.608 20.88a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
);
export default ActionsIcon;
