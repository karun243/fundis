import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './types';
import {getStrokeColor} from './helper';

const HomeIcon = ({iconColor = 'icon-disabled', ...props}: IconProps) => {
  const strokeColor = getStrokeColor(iconColor);
  // const strokeColor = '#E5893D';
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      {...props}
    >
      <Path
        fill={strokeColor}
        d="m23.152 9.767-4.834-4.314a5.726 5.726 0 0 0-7.636 0L5.848 9.767a5.743 5.743 0 0 0-1.92 4.29v7.684c0 2.538 2.03 4.604 4.53 4.604h12.084c2.501 0 4.531-2.066 4.531-4.604v-7.685c0-1.631-.7-3.202-1.921-4.29ZM17.219 24.52H11.78v-3.927a2.723 2.723 0 0 1 2.72-2.718 2.723 2.723 0 0 1 2.718 2.718v3.927Zm6.042-2.79c0 1.534-1.22 2.79-2.72 2.79h-1.51v-3.927a4.533 4.533 0 0 0-4.53-4.53 4.533 4.533 0 0 0-4.532 4.53v3.927h-1.51c-1.499 0-2.72-1.244-2.72-2.79v-7.686c0-1.123.484-2.187 1.318-2.936l4.833-4.314a3.915 3.915 0 0 1 5.22 0l4.834 4.314a3.948 3.948 0 0 1 1.317 2.936v7.685Z"
      />
    </Svg>
  );
};
export default HomeIcon;
