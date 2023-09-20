import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AssociationScreen = () => {
  return (
    <SafeAreaView className="bg-purple-400 flex-1">
      <Text>AssociationScreen</Text>
      <StatusBar style="auto" translucent backgroundColor="transparent" />
    </SafeAreaView>
  );
};
export default AssociationScreen;
