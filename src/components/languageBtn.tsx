import { TouchableOpacity, View } from "react-native";
import Typography from "./Typography";
import { Dispatch, SetStateAction } from "react";
import { FlagUsIcon, NorwegianIcon } from "../assets/icons";

type LanguageBtnProps = {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  onPress: () => void;
};
export const LanguageBtn = (props: LanguageBtnProps) => {
  const { language, setLanguage, onPress } = props;
  const renderFlag = () => {
    if (language === "EN") {
      return <FlagUsIcon />;
    } else if (language === "NO") {
      return <NorwegianIcon />;
    } else return null;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex-row items-center">
        {renderFlag()}
        <Typography variant="B2S" classname="text-text-placeholder pl-1">
          {language}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};
