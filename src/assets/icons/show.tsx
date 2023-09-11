import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const ShowIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
  const strokeColor = getStrokeColor(iconColor);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      fill="none"
      {...props}
    >
      <Path
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.36 12.306S5.865 5.295 12 5.295c6.135 0 9.64 7.01 9.64 7.01s-3.505 7.012-9.64 7.012c-6.135 0-9.64-7.011-9.64-7.011Z"
      />
      <Path
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15.306a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </Svg>
  );
};
export default ShowIcon;
//
