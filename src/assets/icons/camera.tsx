import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CameraIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23 19.153a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11Z"
    />
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 17.153a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </Svg>
);
export default CameraIcon;
