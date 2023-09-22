import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackIcon } from "../../../assets/icons";
import Typography from "../../../components/Typography";

const AddCardScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF]">
      <View className="flex-1 mx-4 flex-col">
        {/* back button */}
        <TouchableOpacity
          onPress={() =>
            // navigation.navigate("ProfileS", { initialRoute: "Profile" })
            navigation.goBack()
          }
          className="py-3"
        >
          <BackIcon />
        </TouchableOpacity>
        {/* heading */}
        <Typography variant="H6" classname="text-main-normal">
          Card Information
        </Typography>
        {/* dummy text */}
        <Typography variant="C1S" classname="text-text-placeholder mt-1">
          Please enter your card details below:
        </Typography>
      </View>
    </SafeAreaView>
  );
};
export default AddCardScreen;
