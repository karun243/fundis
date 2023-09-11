import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const SortIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
  const strokeColor = getStrokeColor(iconColor);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      fill="none"
      {...props}
    >
      <Mask
        id="a"
        width={14}
        height={23}
        x={5}
        y={1}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path
          fill="#fff"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m12 21.954-4.5-6.5h9l-4.5 6.5Zm0-18-4.5 6.5h9l-4.5-6.5Z"
        />
      </Mask>
      <G mask="url(#a)">
        <Path fill={strokeColor} d="M0 .954h24v24H0v-24Z" />
      </G>
    </Svg>
  );
};
export default SortIcon;
