import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const Users2Icon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
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
        d="M17 21.153v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11.153a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21.153v-2a4 4 0 0 0-3-3.87M16 3.283a4 4 0 0 1 0 7.75"
      />
    </Svg>
  );
};
export default Users2Icon;
