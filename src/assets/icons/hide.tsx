import * as React from "react";
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg";
const HideIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={16}
      height={15}
      x={0}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path
        fill="#006FFD"
        fillRule="evenodd"
        d="M15.146 3.393a.833.833 0 0 0-1.178-1.178l-12 12a.833.833 0 1 0 1.179 1.178l1.726-1.726a8.577 8.577 0 0 0 6.276-.01A8.58 8.58 0 0 0 16 8.806a8.634 8.634 0 0 0-2.671-3.595l1.817-1.818Zm-3.858 3.859-1.145 1.145a2.18 2.18 0 0 1-2.552 2.552l-1.145 1.145a3.635 3.635 0 0 0 4.842-4.842ZM8 3.352c.927 0 1.829.15 2.679.43L9.116 5.345a3.635 3.635 0 0 0-4.577 4.577l-2.206 2.205A8.555 8.555 0 0 1 0 8.806C1.295 5.533 4.465 3.35 8 3.35ZM6.457 7.262a2.182 2.182 0 0 1 1.373-.632L5.825 8.636c.04-.517.263-1.004.632-1.373Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#A3A3A9" d="M0 .806h16v16H0z" />
    </G>
  </Svg>
);
export default HideIcon;
