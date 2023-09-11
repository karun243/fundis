import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const LinkIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
  const strokeColor = getStrokeColor(iconColor);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
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
        <Path d="M15.5 7.153h3a5 5 0 1 1 0 10h-3m-6 0h-3a5 5 0 1 1 0-10h3M8.5 12.153h8" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M.5.153h24v24H.5z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default LinkIcon;
