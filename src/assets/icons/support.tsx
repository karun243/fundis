import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SupportIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 11.956 4-9a3 3 0 0 1 3 3v4h5.66a2 2 0 0 1 2 2.3l-1.38 9a2 2 0 0 1-2 1.7H7m0-11v11m0-11H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"
    />
  </Svg>
);
export default SupportIcon;
