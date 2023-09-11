import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const LoadingIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
  const strokeColor = getStrokeColor(iconColor);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={21}
      fill="none"
      {...props}
    >
      <Path
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="M10 2.546V5.88M10 15.88v3.333M4.11 4.988l2.358 2.358M13.534 14.413l2.358 2.358M1.667 10.88H5M15 10.88h3.333M4.11 16.771l2.358-2.358M13.534 7.346l2.358-2.358"
      />
    </Svg>
  );
};
export default LoadingIcon;
