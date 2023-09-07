import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import { ParamListBase } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import Typography from "../../components/Typography/Typography";

type Props = StackScreenProps<ParamListBase, "Onboarding">;

const OnboardingScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const handlePress = () => {
    navigation.navigate("Login");
  };
  return (
    <View className="flex-1 bg-white">
      <View className="h-[72%] items-center justify-center bg-blue-300">
        <Text>Image Carousel will be here</Text>
      </View>
      <View className="h-[28%] items-center justify-center p-5">
        <View className="h-full w-full">
          <Button style="bg-main-normal rounded-full" onPress={handlePress}>
            <Typography classname="py-3 text-main-light_hover" variant="B2B">
              {t("ui.button.GET_STARTED")}
            </Typography>
          </Button>
        </View>
      </View>
    </View>
  );
};
export default OnboardingScreen;
