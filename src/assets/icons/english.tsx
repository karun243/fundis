import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const EnglishIcon = (props: SvgProps) => (
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
        d="M12.8 24.908c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12Z"
      />
      <Path
        fill="#0052B4"
        d="M3.28 5.6a11.956 11.956 0 0 0-2.067 4.176h6.243L3.28 5.601ZM24.387 9.776a11.957 11.957 0 0 0-2.068-4.175l-4.175 4.175h6.243ZM1.213 16.038a11.957 11.957 0 0 0 2.067 4.175l4.176-4.175H1.213ZM20.105 3.387A11.957 11.957 0 0 0 15.93 1.32v6.243l4.175-4.176ZM5.494 22.425a11.957 11.957 0 0 0 4.175 2.067V18.25l-4.175 4.175ZM9.669 1.32a11.957 11.957 0 0 0-4.175 2.067l4.175 4.176V1.32ZM15.93 24.492a11.96 11.96 0 0 0 4.175-2.067L15.93 18.25v6.242ZM18.144 16.038l4.175 4.175a11.957 11.957 0 0 0 2.068-4.175h-6.243Z"
      />
      <Path
        fill="#D80027"
        d="M24.698 11.342H14.365V1.01a12.12 12.12 0 0 0-3.13 0v10.333H.9a12.12 12.12 0 0 0 0 3.13h10.334v10.334a12.117 12.117 0 0 0 3.13 0V14.473h10.333a12.117 12.117 0 0 0 0-3.13Z"
      />
      <Path
        fill="#D80027"
        d="m15.93 16.039 5.355 5.355c.246-.246.481-.504.705-.77l-4.584-4.585H15.93ZM9.67 16.039l-5.356 5.355c.247.246.504.48.77.705l4.585-4.585V16.04ZM9.67 9.777 4.313 4.422a12.03 12.03 0 0 0-.705.77l4.584 4.585H9.67ZM15.93 9.778l5.355-5.355a11.97 11.97 0 0 0-.77-.705L15.93 8.302v1.476Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.8.908h24v24H.8z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default EnglishIcon;
