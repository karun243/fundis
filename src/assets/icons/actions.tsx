import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const ActionsIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
  const strokeColor = getStrokeColor(iconColor);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      {...props}
    >
      <Path
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.608 13.88a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12.608 6.88a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12.608 20.88a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </Svg>
  );
};
export default ActionsIcon;
