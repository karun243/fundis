import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const FilterIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
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
        fill={strokeColor}
        fillRule="evenodd"
        d="M8.5 6.306a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-1.83-1H4a1 1 0 0 0 0 2h2.67a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-7.67a3.001 3.001 0 0 0-5.66 0Zm-2.67 12a1 1 0 1 0 0 2h.67a3.001 3.001 0 0 0 5.66 0H20a1 1 0 0 0 0-2h-9.67a3.001 3.001 0 0 0-5.66 0H4Zm4.5 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-5.5-6a1 1 0 0 1 1-1h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1-1-1Zm13-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default FilterIcon;
