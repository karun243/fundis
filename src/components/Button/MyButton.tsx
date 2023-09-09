import { View, Text, Pressable } from "react-native";
import Typography, { TypographyVariantTypes } from "../Typography/Typography";

type ButtonVariantType = "solid" | "outlined" | "text";

type ButtonProps = {
  children: string | React.ReactNode;
  textVariant?: TypographyVariantTypes;
  variant: ButtonVariantType;
};

const MyButton = (props: ButtonProps) => {
  const { children, textVariant, variant } = props;
  if (variant === "solid") {
    // render solid button
  } else if (variant === "outlined") {
    // render outlined button
  } else if (variant === "text") {
    // render text button
    return (
      typeof children === "string" &&
      textVariant &&
      renderTextButton(children, textVariant)
    );
  } else return undefined;
};
export default MyButton;

const renderSolidButton = () => {};
const renderOutlinedButton = () => {};
const renderTextButton = (text: string, variant: TypographyVariantTypes) => {
  //   console.log(text, variant);
  return (
    <Pressable>
      <Typography variant={variant}>{text}</Typography>
    </Pressable>
  );
};
