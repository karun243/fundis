import { Pressable } from "react-native";
import Typography, { TypographyVariantTypes } from "../Typography/Typography";
import { useState } from "react";
import { ButtonColorType } from "./Button";

type TextButtonProps = {
  children: string;
  variant: TypographyVariantTypes;
  color: ButtonColorType;
  //   onPress: () => void;
};

const TextButton = (props: TextButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const { children, color, variant } = props;

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={`${pressed && "opacity-50"} transition-opacity`}
    >
      <Typography variant={variant} classname={`text-${color}`}>
        {children}
      </Typography>
    </Pressable>
  );
};
export default TextButton;
