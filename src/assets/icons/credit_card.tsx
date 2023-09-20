import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const CreditCardIcon = (props: SvgProps) => (
  <Svg width={49} height={37} fill="none" {...props}>
    <Path
      fill="#000"
      d="M18.258 24.2a.489.489 0 0 1-.488-.488v-10.89a.489.489 0 0 1 .975 0v10.89c0 .269-.22.488-.488.488ZM33.172 36.54a.491.491 0 0 1-.327-.128l-8.53-7.785-8.529 7.785a.49.49 0 0 1-.687-.029.49.49 0 0 1 .03-.687l8.855-8.088a.487.487 0 0 1 .658 0l8.856 8.088c.2.18.215.487.03.687a.48.48 0 0 1-.356.156Z"
    />
    <Path
      fill="url(#a)"
      d="M40.726 36.051H7.901a7.414 7.414 0 0 1-7.414-7.415V7.902A7.414 7.414 0 0 1 7.901.487h32.825a7.414 7.414 0 0 1 7.413 7.415v20.734a7.414 7.414 0 0 1-7.413 7.415Z"
    />
    <Path
      fill="#000"
      d="M40.726 36.54H7.901C3.543 36.54 0 32.994 0 28.636V7.902C0 3.544 3.543 0 7.9 0h32.826c4.357 0 7.9 3.544 7.9 7.903v20.734c0 4.358-3.543 7.902-7.9 7.902ZM7.901.97C4.079.97.975 4.08.975 7.898v20.734c0 3.822 3.11 6.927 6.926 6.927h32.825c3.821 0 6.926-3.11 6.926-6.927V7.898c0-3.822-3.11-6.928-6.926-6.928H7.901Z"
    />
    <Path
      fill="#000"
      d="M22.995 13.31H.487A.489.489 0 0 1 0 12.821c0-.268.22-.488.487-.488h22.508c.458 0 .828-.37.828-.829V8.571a.489.489 0 0 1 .975 0v2.934c0 .995-.809 1.804-1.803 1.804ZM48.14 24.2H.486A.489.489 0 0 1 0 23.714c0-.268.22-.487.487-.487H48.14c.268 0 .488.219.488.487s-.22.488-.488.488Z"
    />
    <Path
      fill="#000"
      d="M24.31 9.058a.491.491 0 0 1-.326-.127L15.128.848A.482.482 0 0 1 15.1.161c.18-.2.488-.215.687-.03l8.53 7.786L32.845.132a.49.49 0 0 1 .687.029.49.49 0 0 1-.029.687l-8.856 8.083a.516.516 0 0 1-.336.127ZM24.31 28.451a.489.489 0 0 1-.486-.487v-4.256c0-.268.219-.488.487-.488s.487.22.487.488v4.256a.483.483 0 0 1-.487.487ZM30.37 24.2a.489.489 0 0 1-.488-.488v-9.574c0-.995.809-1.804 1.803-1.804h16.454a.489.489 0 0 1 0 .975H31.685a.828.828 0 0 0-.828.829v9.574c0 .269-.22.488-.488.488Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={24.313}
        x2={24.313}
        y1={2.28}
        y2={35.611}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC45B" />
        <Stop offset={0.16} stopColor="#F2B55D" />
        <Stop offset={0.428} stopColor="#E3A261" />
        <Stop offset={0.705} stopColor="#D99762" />
        <Stop offset={1} stopColor="#D69363" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default CreditCardIcon;
