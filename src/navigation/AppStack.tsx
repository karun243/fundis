import { Dispatch, SetStateAction } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PropTypes = {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const AppStack = (props: PropTypes) => {
  return (
    <SafeAreaView className="flex flex-1 flex-col items-center justify-center">
      <Text>AppStack</Text>
      <TouchableOpacity
        className="bg-violet-700 px-4 py-1 rounded-md"
        onPress={() => props.setIsLoggedIn(false)}
      >
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default AppStack;
