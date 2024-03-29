// The typography components will accept the following props:
// 1. variant : which defines the font-size, font-weight, and line-spacing styling of the text
// 2. children : the text
// 3. classname : accepts tailwindcss classnames... for other styling to be applied to the text.

import React from 'react';
import {Text, TextStyle} from 'react-native';
import {fs} from '../../customStyles/typographyStyles';
import {cs} from '../../customStyles/colorStyle';

export type TypographyVariantType = keyof typeof fs;
export type TypographyColorType = keyof typeof cs;

interface TypographyProps {
  variant: TypographyVariantType;
  children: React.ReactNode;
  classname?: string;
}

const Typography: React.FC<TypographyProps> = ({variant, children, classname}) => {
  const ts: TextStyle = fs[variant] || {};
  return (
    <Text style={[ts]} className={classname}>
      {children}
    </Text>
  );
};

export default Typography;
