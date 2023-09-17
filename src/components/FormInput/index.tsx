import { View, Text, TextInput } from "react-native";
import { cs } from "../../customStyles/colorStyle";

export type FormInputProps = {
  //   borderRadius: string;
  variant: "normal" | "password";
  placeholder: string;
};

const FormInput = (props: FormInputProps) => {
  const { placeholder } = props;
  return (
    <TextInput
      secureTextEntry={true}
      placeholder={placeholder}
      placeholderTextColor={cs["text-placeholder"]}
      className="border border-line-default rounded-md px-4 py-2 mb-4"
    />
  );
};
export default FormInput;
