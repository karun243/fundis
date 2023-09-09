import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PlayIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#A3A3A9"
      d="M9.329 18.622a2.45 2.45 0 0 1-2.44-2.44v-8.16a2.44 2.44 0 0 1 3.66-2.11l6.31 3.64a2.95 2.95 0 0 1 0 5.1l-6.31 3.64a2.43 2.43 0 0 1-1.22.33Zm.01-11.52a1 1 0 0 0-.48.13.92.92 0 0 0-.47.81v8.16a.92.92 0 0 0 .47.81.94.94 0 0 0 .94 0l6.31-3.64a1.45 1.45 0 0 0 0-2.5l-6.31-3.66a.9.9 0 0 0-.46-.11Z"
    />
  </Svg>
);
export default PlayIcon;
