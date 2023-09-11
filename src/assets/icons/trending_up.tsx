import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const TrendingUpIcon = ({
  iconColor = "icon-disabled",
  ...props
}: IconProps) => {
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
        <Path d="m23.8 6.056-9.5 9.5-5-5-7.5 7.5" />
        <Path d="M17.8 6.056h6v6" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M.8.056h24v24H.8z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default TrendingUpIcon;
