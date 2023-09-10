import { View, Text, TextStyle } from "react-native";
import { useTranslation } from "react-i18next";
import { ParamListBase } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import Typography from "../../components/Typography";
import MyButton from "../../components/Button/MyButton";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = StackScreenProps<ParamListBase, "Onboarding">;

const OnboardingScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const handleNavigation = () => {
    // navigation.navigate("Login");
    navigation.navigate("Playground");
  };

  return (
    <View className="flex-1 bg-white">
      <View className="h-[72%] items-center justify-center bg-blue-300">
        <Typography variant="B1B" colr="main-dark">
          Image Carousel will be here
        </Typography>
      </View>
      <View className="h-[28%] items-center justify-center p-5 ">
        <TouchableOpacity
          onPress={handleNavigation}
          className="bg-green-200 rounded-md px-4 py-1"
        >
          <Text>Playground</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OnboardingScreen;
