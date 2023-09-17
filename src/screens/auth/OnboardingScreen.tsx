import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { ParamListBase } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import Typography from "../../components/Typography";
import { SolidButton } from "../../components/Buttons";

type Props = StackScreenProps<ParamListBase, "Onboarding">;

const OnboardingScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const handleNavigation = () => {
    navigation.navigate("Login");
  };

  return (
    <View className="flex-1 bg-white">
      <View className="h-[72%] items-center justify-center bg-blue-300">
        <Typography variant="B1B">Image Carousel will be here</Typography>
      </View>
      <View className="h-[28%] items-center justify-center p-5">
        <SolidButton
          onPress={handleNavigation}
          fullWidth
          borderRadius="full"
          textVariant="B2B"
          bgColor="main-normal"
          classname="py-3"
        >
          {t("ui.button.GET_STARTED")}
        </SolidButton>
      </View>
    </View>
  );
};
export default OnboardingScreen;
