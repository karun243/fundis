import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CaretDownIcon = (props: SvgProps) => (
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
      d="m12 13.642 4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L12 13.642Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CaretDownIcon;
