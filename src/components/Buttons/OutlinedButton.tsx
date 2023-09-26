import { TouchableOpacity, View } from "react-native";
import Typography from "../Typography";
import clsx from "clsx";
import { OutlinedButtonProps } from "./types";
import { getBorderRadiusStyle } from "./helper";
import { cs } from "../../customStyles/colorStyle";

const OutlinedButton = (props: OutlinedButtonProps) => {
  const {
    borderColor,
    borderRadius,
    borderThickness,
    children,
    classname,
    icon,
    onPress,
    state,
    textClassName,
    textVariant,
  } = props;

  const BORDERCOLOR = cs[borderColor];

  const disabled = state !== "active";
  const btnStyle = clsx(
    `border-[${borderThickness}px] flex-row items-center justify-center px-4 py-1`,
    classname,
    getBorderRadiusStyle(borderRadius),
    disabled && "opacity-40"
  );
  return (
    <TouchableOpacity
      onPress={onPress}
      className={btnStyle}
      disabled={disabled}
      style={{ borderColor: BORDERCOLOR }}
    >
      {icon && <View className="mr-2">{icon}</View>}
      <Typography classname={textClassName} variant={textVariant}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};
export default OutlinedButton;
