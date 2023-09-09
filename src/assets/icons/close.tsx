import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CloseIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.5 22.153c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10ZM15.5 9.153l-6 6M9.5 9.153l6 6"
    />
  </Svg>
);
export default CloseIcon;
