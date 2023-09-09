import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const DownloadIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#A3A3A9"
      fillRule="evenodd"
      d="M3 13.306a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill="#A3A3A9"
      fillRule="evenodd"
      d="M13 4.306a1 1 0 1 0-2 0v9.585L8.707 11.6a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 13.892V4.306Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default DownloadIcon;
