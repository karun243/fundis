import { View, Pressable } from "react-native";
import Typography from "../Typography";
import { Dispatch, SetStateAction, useState } from "react";

import { SolidButton } from "../Buttons";

import { RadioButtonGroup } from "../RadioButton";
import { FlagUsIcon, NorwegianIcon } from "../../assets/icons";
import { cs } from "../../customStyles/colorStyle";

type SelectLanguageModalProps = {
  setLanguageModal: Dispatch<SetStateAction<boolean>>;
};

const SelectLanguageModal = (props: SelectLanguageModalProps) => {
  const [language, setLanguage] = useState("en");
  const handleSelect = (lang: string) => {
    setLanguage(lang);
  };
  const { setLanguageModal } = props;
  const languageOptions = [
    { id: "1", label: "English", value: "en", icon: <FlagUsIcon /> },
    { id: "2", label: "Norwegian", value: "no", icon: <NorwegianIcon /> },
  ];

  return (
    <Pressable
      onPress={() => setLanguageModal(false)}
      className="absolute top-0 bottom-0 right-0 left-0 z-20 items-center justify-center"
      style={{ backgroundColor: "rgba(0, 18, 26, 0.8)" }}
    >
      <Pressable className="w-[75%]  py-5 px-5  bg-white rounded-xl ">
        <View className="flex-col items-center space-y-3">
          <Typography variant="B2B" classname="mb-6">
            Choose your prefered language
          </Typography>

          <View className="self-start w-full">
            <RadioButtonGroup
              divider
              selectedOption={language}
              onSelect={handleSelect}
              options={languageOptions}
              offColor={cs["icon-disabled"]}
              onColor={cs["main-normal"]}
            />
          </View>

          <SolidButton
            fullWidth
            textVariant="C1B"
            onPress={() => console.warn(`You chose ${language}`)}
            classname="py-3 mt-4"
            bgColor="main-normal"
            borderRadius="full"
          >
            Confirm
          </SolidButton>
        </View>
      </Pressable>
    </Pressable>
  );
};
export default SelectLanguageModal;
