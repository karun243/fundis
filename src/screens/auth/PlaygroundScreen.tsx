import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "../../components/Typography/Typography";
const PlaygroundScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      {/* <Text>PlaygroundScreen</Text> */}
      {/* <Typography variant="B1B">Hello world</Typography>
      <Typography variant="B1S">Hello world</Typography>
      <Typography variant="H1">Hello world</Typography> */}
      <Text className="font-bold">Hello world</Text>
      <Text className="text-B1S">Hello world</Text>
      <Text className="text-{}">Hello world</Text>
    </SafeAreaView>
  );
};
export default PlaygroundScreen;
