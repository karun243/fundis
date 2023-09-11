import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const TransactionIcon = ({
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
      <Mask
        id="a"
        width={18}
        height={22}
        x={4}
        y={2}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path
          fill="#fff"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.3 4.88h-13a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1Z"
        />
        <Path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.8 2.88v3m6-3v3"
        />
        <Path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.8 10.38h8m-8 4h6m-6 4h4"
        />
      </Mask>
      <G mask="url(#a)">
        <Path fill={strokeColor} d="M.8.88h24v24H.8v-24Z" />
      </G>
    </Svg>
  );
};
export default TransactionIcon;
