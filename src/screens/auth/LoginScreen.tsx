import { View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

// import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import GlobeIcon from "../../assets/icons/globe";
import LoginForm from "../../features/LoginForm/LoginForm";
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
      <View className="flex-1">
        <LoginForm />
      </View>

      {/* Language_Button */}
      <View className="absolute right-4 top-12">
        {/* <Button
          style="bg-main-light_hover rounded-full px-[10px]"
          textStyle="py-[7px] ml-2"
          onPress={handlePress}
          icon={<GlobeIcon stroke="#E5893D" />}
          iconPosition="front"
        >
          {t("language.EN")}
        </Button> */}
      </View>
      <StatusBar style="light" />
    </View>
  );
};
export default LoginScreen;

// make the form view flex-1 and image view normal...
