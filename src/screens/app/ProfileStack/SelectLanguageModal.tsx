import { Animated, View, Pressable, StyleSheet } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useCardAnimation } from "@react-navigation/stack";
import Typography from "../../../components/Typography";
import { RadioButtonGroup } from "../../../components/RadioButton";
import { cs } from "../../../customStyles/colorStyle";
import { SolidButton } from "../../../components/Buttons";
import { useState } from "react";
import { FlagUsIcon, NorwegianIcon } from "../../../assets/icons";

const SelectLanguageModal = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { current } = useCardAnimation();

  const [language, setLanguage] = useState("en");
  const handleSelect = (lang: string) => {
    setLanguage(lang);
  };

  const languageOptions = [
    { id: "1", label: "English", value: "en", icon: <FlagUsIcon /> },
    { id: "2", label: "Norwegian", value: "no", icon: <NorwegianIcon /> },
  ];

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(0, 18, 26, 0.8)" },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={{
          padding: 20,
          width: "75%",
          maxWidth: 400,
          borderRadius: 12,
          backgroundColor: colors.card,
          transform: [
            {
              scale: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
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
      </Animated.View>
    </View>
  );
};
export default SelectLanguageModal;
