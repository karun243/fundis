import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ProfileIcon = (props: SvgProps) => (
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
      d="M20 21.806v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11.806a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </Svg>
);
export default ProfileIcon;
