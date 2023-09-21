import {
  Animated,
  View,
  Text,
  Pressable,
  Button,
  StyleSheet,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useCardAnimation } from "@react-navigation/stack";
import Typography from "../../../components/Typography";
import { OutlinedButton, SolidButton } from "../../../components/Buttons";

const LogoutConfirmationModal = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { current } = useCardAnimation();

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
        <View className="flex-col items-center space-y-5">
          <Typography variant="B2B" classname="mb-2">
            Logout
          </Typography>
          <Typography variant="C1S" classname="text-center text-[#71727A]">
            Are you sure you want to log out? You'll need to login again to use
            the app.
          </Typography>
          <View className="w-full px-1 flex-row justify-between my-2">
            <OutlinedButton
              classname="flex-1 py-2"
              textVariant="C1S"
              state="active"
              onPress={navigation.goBack}
              borderColor="icon-default"
              borderRadius="md"
            >
              Cancel
            </OutlinedButton>
            <SolidButton
              textVariant="C1B"
              onPress={() => console.warn("You press logout")}
              classname="flex-1 ml-4 px-4 py-2"
              bgColor="state-error-base"
              borderRadius="md"
            >
              Logout
            </SolidButton>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};
export default LogoutConfirmationModal;
