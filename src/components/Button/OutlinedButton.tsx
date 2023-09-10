import { TouchableOpacity, View } from "react-native";
import Typography from "../Typography";
import clsx from "clsx";
import { OutlinedButtonProps } from "./types";
import { getBorderRadiusStyle } from "./helper";

const OutlinedButton = (props: OutlinedButtonProps) => {
  const {
    borderColor,
    borderRadius,
    children,
    className,
    icon,
    onPress,
    state,
    textClassName,
    textVariant,
  } = props;

  const disabled = state !== "active";
  const btnStyle = clsx(
    `border-${borderColor}`,
    "border-2 flex-row items-center justify-center px-4 py-1",
    className,
    getBorderRadiusStyle(borderRadius),
    disabled && "opacity-40"
  );
  return (
    <TouchableOpacity
      onPress={onPress}
      className={btnStyle}
      disabled={disabled}
    >
      {icon && <View className="mr-2">{icon}</View>}
      <Typography className={textClassName} variant={textVariant}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};
export default OutlinedButton;
