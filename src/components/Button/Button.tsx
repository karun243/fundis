import { useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import clsx from "clsx";
import Typography from "../Typography/Typography";

type ButtonVariantType = "solid" | "outlined" | "text";
type ButtonStateType = "active" | "disabled" | "loading";
type BorderRadiusType = "full" | "md" | "sm";
export type ButtonColorType =
  | "main-normal"
  | "main-normal-hover"
  | "main-light-hover"
  | "main-light"
  | "state-error-base";

type ButtonProps = {
  variant: ButtonVariantType;
  bgColor?: ButtonColorType; // not required for bg-white
  borderRadius?: BorderRadiusType; //not required for text buttons
  icon?: React.ReactNode;
  iconPosition?: "front" | "back";
  state?: ButtonStateType;
  fullwidth?: boolean;
  children: string;

  style?: string; //
  textStyle?: string; // textcolor
  childStyle?: string; // iconcolor will be sent as stroke prop in the icon component...
  onPress: () => void; //({nativeEvent: PressEvent}) => void
};

// export type ButtonType = React.DetailedHTMLProps<
//   React.ButtonHTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// > &
//   ButtonOptions;

const getBorderRadiusStyle = (borderRadius: BorderRadiusType) => {
  switch (borderRadius) {
    case "full":
      return "rounded-full";
    case "md":
      return "rounded-xl";
    case "sm":
      return "rounded-md";
    default:
      return " ";
  }
};

const Button = (props: ButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const {
    onPress,
    children,
    state = "active",
    icon,
    iconPosition,
    style,
    textStyle,
    childStyle,
  } = props;

  const getVariantStyle = (
    variant: ButtonVariantType,
    state: ButtonStateType,
    color: ButtonColorType
  ) => {
    if (variant === "solid") {
      // styling for solid buttons
      switch (color) {
        case "main-light":
          return {
            default: "bg-main-light",
            pressed: "bg-main-light opacity-80",
            disabled: "bg-main-light",
            disabledText: "text-main-normal",
          };
        case "main-light-hover":
          return {
            default: "bg-main-normal",
            pressed: "bg-main-dark",
            disabled: "bg-main-light",
            disabledText: "text-main-normal",
          };
        case "main-normal":
          return {
            default: "bg-main-normal",
            pressed: "bg-main-dark",
            disabled: "bg-main-light",
            disabledText: "text-main-normal",
          }; //[default, pressed, disabled, disabledText]
        case "state-error-base":
          return {
            default: "bg-main-normal",
            pressed: "bg-main-dark",
            disabled: "bg-main-light",
            disabledText: "text-main-normal",
          };
        default:
          return undefined;
      }
    } else if (variant === "outlined") {
      // styling for outlined buttons
    } else if (variant === "text") {
      return {
        default: " ",
        pressed: " ",
        disabled: "bg-main-light",
        disabledText: "text-main-normal",
      };
    } else
      return {
        default: " ",
        pressed: " ",
        disabled: " ",
        disabledText: " ",
      };
  };

  const buttonStyles = clsx(style, "flex-row items-center justify-center"); // add gap and see the effect.
  const typographyStyle = clsx(textStyle);
  const childrenStyle = clsx(childStyle);

  return (
    <Pressable
      className={buttonStyles}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      {state !== "loading" && icon && iconPosition == "front" && icon}
      {typeof children === "string" ? (
        <Typography classname={typographyStyle} variant="C1">
          {children}
        </Typography>
      ) : (
        <View className={childrenStyle}>{children}</View>
      )}
    </Pressable>
  );
};
export default Button;
