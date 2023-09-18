import * as React from "react";
import Svg, { SvgProps, Circle, Path, Rect } from "react-native-svg";
const ScanBtn = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={68}
    fill="none"
    {...props}
  >
    <Circle cx={34} cy={34} r={34} fill="#E5893D" />
    <Path
      stroke="#FFF5ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.77}
      d="M28.46 21.534h-4.156a2.77 2.77 0 0 0-2.77 2.77v4.156m24.933 0v-4.156a2.77 2.77 0 0 0-2.77-2.77H39.54m0 24.933h4.156a2.77 2.77 0 0 0 2.77-2.77V39.54m-24.933 0v4.156a2.77 2.77 0 0 0 2.77 2.77h4.156"
    />
    <Rect
      width={31.497}
      height={2.77}
      x={18.377}
      y={32.992}
      fill="#FFF5ED"
      rx={1.385}
    />
  </Svg>
);
export default ScanBtn;
