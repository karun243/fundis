import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const ConfigIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
  const strokeColor = getStrokeColor(iconColor);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        fill={strokeColor}
        d="M13.566 5.464v.22c-.588-.011-1.177-.011-1.766-.011v-.197c0-.798-.671-1.445-1.472-1.445H9.162c-1.33 0-2.414-1.064-2.414-2.358 0-.474.4-.867.883-.867.495 0 .883.393.883.867 0 .346.295.624.648.624h1.166c1.778.011 3.227 1.433 3.239 3.167"
        opacity={0.4}
      />
      <Path
        fill={strokeColor}
        fillRule="evenodd"
        d="m15.797 5.705 1.137.015C21.021 5.72 24 8.633 24 12.656v5.167c0 4.023-2.98 6.936-7.066 6.936-1.637.035-3.274.047-4.922.047-1.649 0-3.31-.012-4.946-.047C2.979 24.76 0 21.846 0 17.823v-5.167C0 8.633 2.98 5.72 7.078 5.72c1.542-.024 3.12-.047 4.722-.047.589 0 1.177 0 1.766.012.743 0 1.485.01 2.23.02Zm-4.663 10.9H9.898v1.225c0 .474-.4.867-.883.867a.874.874 0 0 1-.884-.867v-1.225H6.883A.874.874 0 0 1 6 15.738c0-.474.4-.867.883-.867h1.248v-1.214c0-.474.39-.867.884-.867.483 0 .883.393.883.867v1.213h1.236c.483 0 .884.394.884.868 0 .485-.4.867-.884.867Zm5.005-1.953h.118a.874.874 0 0 0 .883-.867c0-.474-.4-.867-.883-.867h-.118a.867.867 0 1 0 0 1.734Zm2.014 3.975h.118a.874.874 0 0 0 .883-.867c0-.474-.4-.867-.883-.867h-.118a.867.867 0 1 0 0 1.734Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default ConfigIcon;
