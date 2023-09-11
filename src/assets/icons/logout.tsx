import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const LogoutIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
  const strokeColor = getStrokeColor(iconColor);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.8 3.768h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10.8 17.768l5-5-5-5M15.8 12.768h-12"
      />
    </Svg>
  );
};
export default LogoutIcon;
