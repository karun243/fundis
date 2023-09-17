import {Pressable, Text, View} from 'react-native';
import {SolidButtonProps} from './types';
import Typography from '../Typography';
import clsx from 'clsx';
import {getButtonColorStyle, getBorderRadiusStyle} from './helper';
import {useState} from 'react';

const SolidButton = (props: SolidButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const {
    bgColor,
    borderRadius,
    children,
    classname,
    fullWidth,
    icon,
    onPress,
    state = 'active',
    textClassName,
    textVariant,
  } = props;

  const {
    defaultBgColor,
    pressedBgColor,
    disabledBgColor,
    defaultTextColor,
    pressedTextColor,
    disabledTextColor,
    defaultIconColor,
    pressedIconColor,
    disabledIconColor,
  } = getButtonColorStyle(bgColor);

  const disabled = state !== 'active';
  const btnStyle = clsx(
    'flex-row items-center justify-center',
    fullWidth && 'w-full',
    classname,
    getBorderRadiusStyle(borderRadius),
    disabled ? disabledBgColor : pressed ? pressedBgColor : defaultBgColor,
  );
  const textStyle = clsx(
    textClassName,
    disabled ? disabledTextColor : pressed ? pressedTextColor : defaultTextColor,
  );
  const iconStyle = clsx(
    'mr-1',
    disabled ? disabledIconColor : pressed ? pressedIconColor : defaultIconColor,
  );

  return (
    <Pressable
      className={btnStyle}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      {icon && <View className={iconStyle}>{icon}</View>}
      {typeof children === 'string' && (
        <Typography classname={textStyle} variant={textVariant}>
          {children}
        </Typography>
      )}
    </Pressable>
  );
};
export default SolidButton;
