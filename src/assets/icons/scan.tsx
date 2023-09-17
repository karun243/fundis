import * as React from "react";
import Svg, { SvgProps, Path, Circle, Rect } from "react-native-svg";
const ScanIcon = (props: SvgProps) => (
  <Svg width={127} height={80} fill="none" {...props}>
    <Path
      fill="#D9D9D9"
      d="M0 36h127v10H0zM17.067 55.642C12.041 49.179 7.53 46 0 46h127c-7.53 0-11.143 3.526-16.565 9.642C95.811 73.46 85.336 80 63.249 80s-31.05-7.387-46.182-24.358Z"
    />
    <Circle cx={63} cy={34} r={34} fill="#E5893D" />
    <Path
      stroke="#FFF5ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.77}
      d="M57.46 21.534h-4.156a2.77 2.77 0 0 0-2.77 2.77v4.156m24.933 0v-4.156a2.77 2.77 0 0 0-2.77-2.77H68.54m0 24.933h4.156a2.77 2.77 0 0 0 2.77-2.77V39.54m-24.933 0v4.156a2.77 2.77 0 0 0 2.77 2.77h4.156"
    />
    <Rect
      width={31.497}
      height={2.77}
      x={47.377}
      y={32.992}
      fill="#FFF5ED"
      rx={1.385}
    />
  </Svg>
);
export default ScanIcon;
