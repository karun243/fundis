import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";
const ScanIcon = (props: SvgProps) => (
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
      d="M8 3.556H5a2 2 0 0 0-2 2v3m18 0v-3a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3m-18 0v3a2 2 0 0 0 2 2h3"
    />
    <Rect width={22.738} height={2} x={0.72} y={11.556} fill="#A3A3A9" rx={1} />
  </Svg>
);
export default ScanIcon;
