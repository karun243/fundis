import { TouchableOpacity, View } from "react-native";
import clsx from "clsx";
import Typography from "../Typography/Typography";

type ButtonOptions = {
  children: string | React.ReactNode;
  style?: string;
  textStyle?: string;
  disabled?: boolean;
  fullwidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "front" | "back";
  loading?: boolean;
  loadingIcon?: React.ReactNode;
  onPress: () => void;
};

type ButtonProps = ButtonOptions;

const Button = (props: ButtonProps) => {
  const { onPress, children, loading, icon, iconPosition, style, textStyle } =
    props;
  const buttonStyles = clsx(style, "flex-row items-center justify-center");
  const typographyStyle = clsx(textStyle);

  return (
    <TouchableOpacity onPress={onPress}>
      <View className={buttonStyles}>
        {!loading && icon && iconPosition == "front" && icon}
        {typeof children === "string" ? (
          <Typography classname={typographyStyle} variant="C1">
            {children}
          </Typography>
        ) : (
          children
        )}
      </View>
    </TouchableOpacity>
  );
};
export default Button;
