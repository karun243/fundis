import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-violet-400 flex-1 items-center justify-center">
      <Text>HomeScreen</Text>
      <StatusBar translucent backgroundColor="transparent" />
    </SafeAreaView>
  );
};
export default HomeScreen;
