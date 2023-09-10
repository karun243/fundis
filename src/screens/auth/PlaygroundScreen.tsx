import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "../../components/Typography";
import {
  OutlinedButton,
  SolidButton,
  TextButton,
} from "../../components/Button";
import CameraIcon from "../../assets/icons/camera";

const PlaygroundScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      {/* <OutlinedButton
        borderColor="state-error-base"
        borderRadius="md"
        // icon=<CameraIcon />
        onPress={() => console.log("Pressed")}
        state="active"
        textVariant="C1B"
      >
        Close
      </OutlinedButton> */}
      <SolidButton
        borderRadius="full"
        bgColor="main-normal"
        // fullWidth
        className="px-5 py-2 "
        onPress={() => console.log("Pressed")}
        state="active"
        textVariant="B2B"
      >
        Logout
      </SolidButton>
    </SafeAreaView>
  );
};
export default PlaygroundScreen;
