import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const UploadIcon = (props: SvgProps) => (
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
      d="M12 2.556v11M16 6.556l-4-4-4 4"
    />
    <Path
      stroke="#A3A3A9"
      strokeLinecap="round"
      strokeWidth={2}
      d="M15.938 10.556H17a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1.063"
    />
  </Svg>
);
export default UploadIcon;
