import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";
import { getStrokeColor } from "./helper";

const VerifiedIcon = ({ iconColor = "icon-disabled", ...props }: IconProps) => {
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
        d="M10.807 3.054a3 3 0 0 0-3.595 1.49L6.406 6.12a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .617l-.545 1.684a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.578a3 3 0 0 0 3.595 1.49l1.685-.546a.999.999 0 0 1 .616 0l1.685.544a3 3 0 0 0 3.595-1.488l.806-1.578a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.684a1 1 0 0 1 0-.617l.545-1.684a3 3 0 0 0-1.49-3.596l-1.576-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0l-1.685-.545ZM7.56 12.707l1.414-1.414 2.828 2.83 5.657-5.658 1.415 1.414-7.072 7.07-4.242-4.242Z"
      />
    </Svg>
  );
};
export default VerifiedIcon;
