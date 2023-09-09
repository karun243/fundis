import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SettingIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#A3A3A9"
      d="m20.063 14.526-1.28-1.093a7.018 7.018 0 0 0 0-2.258l1.28-1.094a.626.626 0 0 0 .181-.687l-.017-.051a8.667 8.667 0 0 0-1.557-2.694l-.035-.04a.628.628 0 0 0-.686-.186l-1.588.564a6.882 6.882 0 0 0-1.947-1.125l-.307-1.66a.626.626 0 0 0-.503-.502l-.053-.01a8.824 8.824 0 0 0-3.106 0l-.052.01a.626.626 0 0 0-.504.502L9.58 5.87a6.872 6.872 0 0 0-1.934 1.121l-1.6-.568a.625.625 0 0 0-.685.185l-.035.041A8.711 8.711 0 0 0 3.77 9.343l-.018.05a.627.627 0 0 0 .182.688l1.295 1.106a6.872 6.872 0 0 0 0 2.23l-1.295 1.106a.625.625 0 0 0-.182.687l.018.05a8.689 8.689 0 0 0 1.556 2.694l.035.041a.627.627 0 0 0 .686.186l1.6-.569a6.827 6.827 0 0 0 1.933 1.121l.309 1.668a.626.626 0 0 0 .504.502l.052.01a8.776 8.776 0 0 0 3.106 0l.053-.01a.626.626 0 0 0 .503-.502l.307-1.66a6.836 6.836 0 0 0 1.947-1.125l1.588.565a.625.625 0 0 0 .686-.186l.035-.04a8.71 8.71 0 0 0 1.557-2.694l.017-.051a.623.623 0 0 0-.181-.684Zm-2.666-3.12a5.53 5.53 0 0 1 0 1.8l-.13.783 1.46 1.248c-.222.51-.5.992-.832 1.438l-1.813-.643-.613.504a5.46 5.46 0 0 1-1.55.895l-.743.279-.35 1.895a7.373 7.373 0 0 1-1.66 0l-.35-1.899-.738-.283a5.468 5.468 0 0 1-1.537-.893l-.613-.506-1.824.649a7.381 7.381 0 0 1-.833-1.438l1.475-1.26-.127-.78a5.624 5.624 0 0 1-.072-.89c0-.298.023-.597.072-.888l.127-.781-1.475-1.26c.221-.51.5-.99.833-1.438l1.824.649.613-.506c.463-.38.98-.682 1.537-.893l.74-.279.35-1.898a7.373 7.373 0 0 1 1.66 0l.35 1.894.744.28c.56.21 1.082.511 1.549.894l.613.504 1.813-.643c.332.448.609.93.832 1.438l-1.46 1.248.128.78ZM12 8.672a3.438 3.438 0 1 0 0 6.875 3.438 3.438 0 0 0 0-6.875Zm1.547 4.984a2.18 2.18 0 0 1-1.547.64 2.18 2.18 0 0 1-2.022-1.35 2.18 2.18 0 0 1-.165-.837c0-.584.228-1.133.64-1.546.414-.415.963-.641 1.547-.641s1.133.226 1.547.64a2.18 2.18 0 0 1 .64 1.547 2.18 2.18 0 0 1-.64 1.547Z"
    />
  </Svg>
);
export default SettingIcon;
