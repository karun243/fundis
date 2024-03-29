import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const HeartIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
  const strokeColor = getStrokeColor(iconColor);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21.04 4.916a5.5 5.5 0 0 0-7.78 0l-1.06 1.06-1.06-1.06a5.501 5.501 0 1 0-7.78 7.78l1.06 1.06 7.78 7.78 7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M.2.306h24v24H.2z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default HeartIcon;
