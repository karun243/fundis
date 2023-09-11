import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const RepeatIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
  const strokeColor = getStrokeColor(iconColor);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <G
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        clipPath="url(#a)"
      >
        <Path d="m17.8 1.806 4 4-4 4" />
        <Path d="M3.8 11.806v-2a4 4 0 0 1 4-4h14M7.8 23.806l-4-4 4-4" />
        <Path d="M21.8 13.806v2a4 4 0 0 1-4 4h-14" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M.8.806h24v24H.8z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default RepeatIcon;
