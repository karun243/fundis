import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const PhoneIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
  const strokeColor = getStrokeColor(iconColor);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={24}
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
          d="M15.05 5.306A5 5 0 0 1 19 9.256m-3.95-7.95A9 9 0 0 1 23 9.246m-1 7.98v3a1.998 1.998 0 0 1-2.18 2 19.791 19.791 0 0 1-8.63-3.07 19.502 19.502 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67 2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.362 1.902.7 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16.001 16.001 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.908.338 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 .306h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default PhoneIcon;
