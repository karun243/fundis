import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const TickCircledIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#A3A3A9"
      d="M12 23.306c-5.93 0-10.75-4.82-10.75-10.75S6.07 1.806 12 1.806s10.75 4.82 10.75 10.75-4.82 10.75-10.75 10.75Zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25Z"
    />
    <Path
      fill="#A3A3A9"
      d="M10.58 16.136a.75.75 0 0 1-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.67 5.67a.75.75 0 0 1-.53.22Z"
    />
  </Svg>
);
export default TickCircledIcon;
