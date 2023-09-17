import { SafeAreaView } from "react-native-safe-area-context";
import { SolidButton } from "../../components/Buttons";
import GlobeIcon from "../../assets/icons/globe";

const PlaygroundScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <SolidButton
        textVariant="B2S"
        classname="px-4 py-1"
        textClassName=""
        onPress={() => {
          console.log("pressed");
        }}
        icon=<GlobeIcon iconColor="main-normal" />
        bgColor="main-light-hover"
        borderRadius="full"
      >
        English
      </SolidButton>
    </SafeAreaView>
  );
};
export default PlaygroundScreen;
