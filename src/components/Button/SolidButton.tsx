import { Pressable, Text } from "react-native";
import { SolidButtonProps } from "./types";
import Typography from "../Typography";
import clsx from "clsx";
import { getButtonColorStyle, getBorderRadiusStyle } from "./helper";
import { useState } from "react";

const SolidButton = (props: SolidButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const {
    bgColor,
    borderRadius,
    children,
    className,
    fullWidth,
    icon,
    onPress,
    state,
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
  } = getButtonColorStyle(bgColor);

  const disabled = state !== "active";
  const btnStyle = clsx(
    "flex-row items-center justify-center",
    fullWidth && "w-full",
    className,
    getBorderRadiusStyle(borderRadius),
    disabled ? disabledBgColor : pressed ? pressedBgColor : defaultBgColor
  );
  const textStyle = clsx(
    textClassName,
    disabled ? disabledTextColor : pressed ? pressedTextColor : defaultTextColor
  );

  return (
    <Pressable
      className={btnStyle}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      {typeof children === "string" && (
        <Typography className={textStyle} variant={textVariant}>
          {children}
        </Typography>
      )}
    </Pressable>
  );
};
export default SolidButton;
