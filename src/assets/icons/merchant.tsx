import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const MerchantIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#A3A3A9"
      d="M19.227 8.12V5.618a.624.624 0 0 0-.625-.625H5.398a.624.624 0 0 0-.625.625V8.12a.625.625 0 0 0-.585.623v2.572a3.49 3.49 0 0 0 .586 1.94v6.738c0 .344.279.625.624.625h13.204c.345 0 .625-.28.625-.625v-6.738a3.492 3.492 0 0 0 .586-1.94V8.743a.625.625 0 0 0-.586-.623ZM6.18 6.4h11.64v1.718H6.18V6.4Zm7.07 12.814h-2.5V17.18h2.5v2.033Zm4.57 0H14.5v-2.658a.624.624 0 0 0-.625-.625h-3.75a.624.624 0 0 0-.625.625v2.658H6.18v-4.73a3.52 3.52 0 0 0 1.55.354 3.527 3.527 0 0 0 2.131-.708.012.012 0 0 1 .012 0c.233.175.487.32.756.431a3.52 3.52 0 0 0 1.375.276 3.527 3.527 0 0 0 2.13-.707.012.012 0 0 1 .012 0c.234.175.487.32.756.431a3.52 3.52 0 0 0 1.375.276c.477 0 .938-.092 1.375-.275.059-.026.117-.051.176-.079v4.73h-.008Zm.586-7.899a2.126 2.126 0 0 1-2.134 2.116 2.14 2.14 0 0 1-1.86-1.073.313.313 0 0 0-.271-.158h-.012a.315.315 0 0 0-.272.158A2.134 2.134 0 0 1 12 13.431c-.795 0-1.488-.43-1.855-1.069a.322.322 0 0 0-.559 0 2.141 2.141 0 0 1-1.857 1.069 2.126 2.126 0 0 1-2.135-2.116v-1.78c0-.007.004-.01.01-.01h12.793c.005 0 .01.003.01.01v1.78Z"
    />
  </Svg>
);
export default MerchantIcon;
