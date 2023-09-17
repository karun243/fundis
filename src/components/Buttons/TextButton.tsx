// The TextButton components will accept the following props:
// 1. children : the text
// 2. className : tailwindcss classname string for additional styling of the text(except the font size, font weight, and line height)
// 3. onPress : onPress handler
// 4. state : state of the button => active <default> | disabled | loading
// 5. textVariant : string for defining the font size, font weight, and line height styling.
// Note: if the button is not active, opacity is 40% and because we are using TouchableOpacity, the onPressIn and onPressOut animations are from the TouchableOpacity.

import {TouchableOpacity} from 'react-native';
import Typography from '../Typography';
import clsx from 'clsx';
import {TextButtonProps} from './types';

const TextButton = (props: TextButtonProps) => {
  const {children, classname, onPress, state = 'active', textVariant} = props;
  const disabled = state !== 'active';
  const btnStyle = clsx(classname, disabled && 'opacity-40');
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Typography variant={textVariant} classname={btnStyle}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};
export default TextButton;
