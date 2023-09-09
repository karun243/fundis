import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const FinnishIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#F0F0F0"
        d="M12.266 24.806c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12Z"
      />
      <Path
        fill="#0052B4"
        d="M24.165 11.24H9.657V1.09c-1.109.247-2.16.645-3.13 1.175v8.975H.367a12.104 12.104 0 0 0 0 3.13h6.16v8.976c.97.53 2.021.928 3.13 1.174V14.37h14.508a12.12 12.12 0 0 0 0-3.13Z"
      />
    </G>
    <Path stroke="#F6F7F7" strokeWidth={0.469} d="M.5 1.04h23.531v23.531H.5z" />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.266.806h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default FinnishIcon;
