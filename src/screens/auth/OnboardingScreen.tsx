import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import { ParamListBase } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import Typography from "../../components/Typography/Typography";
import { useState } from "react";
import MyButton from "../../components/Button/MyButton";
import TextButton from "../../components/Button/TextButton";

type Props = StackScreenProps<ParamListBase, "Onboarding">;

const OnboardingScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [pressed, setPressed] = useState(false);
  const handlePress = () => {
    // navigation.navigate("Login");
    navigation.navigate("Playground");
  };
  return (
    <View className="flex-1 bg-white">
      <View className="h-[72%] items-center justify-center bg-blue-300">
        <Text>Image Carousel will be here</Text>
      </View>
      <View className="h-[28%] items-center justify-center p-5">
        <View className="h-full w-full">
          <TouchableOpacity onPress={handlePress}>
            <Text>Playground</Text>
          </TouchableOpacity>
          {/* <Button
            variant="solid"
            style="bg-main-normal rounded-full"
            onPress={handlePress}
          >
            <Typography classname="py-3 text-main-light_hover" variant="B2B">
              {t("ui.button.GET_STARTED")}
            </Typography>
          </Button> */}

          {/* test */}
          <View className="mt-5">
            <Text className="text-D1B">Hello world</Text>
            <Text className="text-D1B">Hello world</Text>
            <Text className="text-B1B">Hello world</Text>
            <Text className="text-B1S">Hello world</Text>
            {/* <MyButton variant="text">Press Me</MyButton> */}
            <TextButton variant="B1B" color="main-normal-hover">
              Forgot password
            </TextButton>
            <TextButton variant="B1S" color="main-normal-hover">
              Forgot password
            </TextButton>
            <TextButton variant="D1B" color="main-normal-hover">
              Forgot password
            </TextButton>
            {/* <Pressable
              onPressIn={() => setPressed(true)}
              onPressOut={() => setPressed(false)}
              onPress={() => {
                // console.warn("Pressed");
              }}
              className={`py-2 rounded-full items-center transition-colors ${
                pressed ? "bg-red-600" : "bg-red-300"
              }`}
            >
              <Text className=" font-bold">Press me</Text>
            </Pressable> */}
            {/* <Pressable
              onPress={() => {
                console.warn("pressed");
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
                },
                {
                  borderRadius: 8,
                  padding: 6,
                },
              ]}
            >
              {({ pressed }) => (
                <Text style={{ fontSize: 16 }}>
                  {pressed ? "Pressed!" : "Press Me"}
                </Text>
              )}
            </Pressable> */}
          </View>
        </View>
      </View>
    </View>
  );
};
export default OnboardingScreen;
