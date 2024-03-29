import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const HelpIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
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
        d="M12 3.403a8.75 8.75 0 1 0 .001 17.501A8.75 8.75 0 0 0 12 3.403Zm0 16.015a7.267 7.267 0 0 1 0-14.53 7.267 7.267 0 0 1 0 14.53Z"
      />
      <Path
        fill={strokeColor}
        d="M14.18 8.338A3.293 3.293 0 0 0 12 7.543c-.82 0-1.594.284-2.18.795-.61.534-.945 1.25-.945 2.018v.148c0 .086.07.157.156.157h.938c.086 0 .156-.07.156-.157v-.148c0-.861.842-1.563 1.875-1.563s1.875.702 1.875 1.563c0 .607-.43 1.164-1.096 1.42a2.183 2.183 0 0 0-1.406 2.066v.42c0 .086.07.156.156.156h.938c.086 0 .156-.07.156-.156v-.443a.944.944 0 0 1 .604-.875c1.152-.444 1.896-1.46 1.896-2.588.002-.768-.334-1.484-.943-2.018Zm-2.961 8.112a.781.781 0 1 0 1.562 0 .781.781 0 0 0-1.562 0Z"
      />
    </Svg>
  );
};
export default HelpIcon;
