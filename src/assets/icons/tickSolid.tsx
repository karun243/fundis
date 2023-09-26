import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
const TickSolidIcon = (props: SvgProps) => (
  <Svg width={29} height={29} fill="none" {...props}>
    <Circle cx={14.25} cy={14.157} r={14} fill="#E5893D" />
    <Path
      stroke="#FFF5ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.003 14.157 3.494 3.339 7-6.678"
    />
  </Svg>
);
export default TickSolidIcon;
