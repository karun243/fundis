import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const RoleIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#A3A3A9"
      d="M12 14.056v8H4a8 8 0 0 1 8-8Zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6Zm9 4h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1Zm-2 0v-1a1 1 0 1 0-2 0v1h2Z"
    />
  </Svg>
);
export default RoleIcon;
