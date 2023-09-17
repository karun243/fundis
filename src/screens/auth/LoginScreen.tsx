import { View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

// import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import GlobeIcon from "../../assets/icons/globe";

import { SolidButton } from "../../components/Buttons";

const LoginScreen = () => {
  const { t } = useTranslation();
  const handlePress = () => {};
  return (
    <View className="flex-1 bg-white">
      {/* Login_Image */}
      <View className="flex-1">
        <Image
          resizeMode="cover"
          source={require("../../../assets/login.png")}
          className="h-full w-full"
        />
      </View>

      {/* Login_Form */}
      <View className="flex-1">{/* <LoginForm /> */}</View>

      {/* Language_Button */}
      <View className="absolute right-4 top-12">
        <SolidButton
          textVariant="C1S"
          onPress={() => console.warn("open language modal")}
          classname="px-2 py-1"
          icon={<GlobeIcon iconColor="main-normal" />}
          bgColor="main-light-hover"
          borderRadius="full"
        >
          {t("language.EN")}
        </SolidButton>
      </View>
      <StatusBar style="light" />
    </View>
  );
};
export default LoginScreen;

// make the form view flex-1 and image view normal...
