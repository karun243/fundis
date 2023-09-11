import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const OverviewIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
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
        d="M16.875 2.956h3.386a2.549 2.549 0 0 1 2.539 2.56V8.93a2.549 2.549 0 0 1-2.539 2.56h-3.386a2.549 2.549 0 0 1-2.538-2.56V5.516a2.549 2.549 0 0 1 2.538-2.56"
        opacity={0.4}
      />
      <Path
        fill={strokeColor}
        fillRule="evenodd"
        d="M5.338 2.956h3.386a2.549 2.549 0 0 1 2.539 2.56V8.93a2.549 2.549 0 0 1-2.539 2.56H5.338A2.549 2.549 0 0 1 2.8 8.93V5.516a2.549 2.549 0 0 1 2.538-2.56Zm0 11.465h3.386a2.549 2.549 0 0 1 2.539 2.56v3.415a2.55 2.55 0 0 1-2.539 2.56H5.338a2.55 2.55 0 0 1-2.538-2.56V16.98a2.549 2.549 0 0 1 2.538-2.56Zm14.923 0h-3.386a2.549 2.549 0 0 0-2.538 2.56v3.415a2.55 2.55 0 0 0 2.538 2.56h3.386a2.55 2.55 0 0 0 2.539-2.56V16.98a2.549 2.549 0 0 0-2.539-2.56Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default OverviewIcon;
