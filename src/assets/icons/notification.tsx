import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const NotificationIcon = ({
  iconColor = "icon-disabled",
  ...props
}: IconProps) => {
  const strokeColor = getStrokeColor(iconColor);
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      fill="none"
      {...props}
    >
      <Path
        fill={strokeColor}
        d="M19.77 12.415c-.731-.853-1.063-1.592-1.063-2.848V9.14c0-1.637-.377-2.691-1.195-3.746-1.263-1.637-3.388-2.624-5.468-2.624h-.088c-2.037 0-4.095.941-5.379 2.512-.864 1.076-1.284 2.176-1.284 3.858v.427c0 1.256-.31 1.995-1.063 2.848-.553.628-.73 1.436-.73 2.31 0 .875.287 1.704.864 2.378a4.532 4.532 0 0 0 2.9 1.413c1.571.18 3.142.247 4.737.247 1.593 0 3.164-.113 4.736-.247a4.532 4.532 0 0 0 2.9-1.413 3.614 3.614 0 0 0 .863-2.378c0-.874-.177-1.682-.73-2.31"
      />
      <Path
        fill={strokeColor}
        d="M14.009 19.998c-.5-.107-3.546-.107-4.046 0-.428.098-.89.328-.89.832.025.48.306.904.696 1.173l-.001.001a3.635 3.635 0 0 0 1.714.732c.33.046.666.043 1.008 0 .618-.09 1.21-.34 1.714-.732l-.001-.001c.39-.269.67-.693.695-1.173 0-.504-.462-.733-.89-.832"
        opacity={0.4}
      />
    </Svg>
  );
};
export default NotificationIcon;
