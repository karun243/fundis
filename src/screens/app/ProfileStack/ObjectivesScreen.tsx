import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { BackIcon } from "../../../assets/icons";
import Typography from "../../../components/Typography";
import { SafeAreaView } from "react-native-safe-area-context";
import { SolidButton } from "../../../components/Buttons";
import Objectives from "../../../components/Objectives";
import { useState } from "react";
import CreateObjectiveBottomSheet from "../../../components/Objectives/CreateObjectiveBottomSheet";

const ObjectivesScreen = () => {
  const navigation = useNavigation();

  const [sheetVisible, setSheetVisible] = useState(false);
  const toggleSheet = () => {
    setSheetVisible(!sheetVisible);
  };

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
          Objectives
        </Typography>
        {/* dummy text */}
        <Typography variant="C1S" classname="text-text-placeholder mt-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        {/* no objectives image */}
        <View className="flex-1 justify-center">
          <Objectives />
        </View>
        <SolidButton
          onPress={toggleSheet}
          textVariant="B2B"
          borderRadius="full"
          bgColor="main-normal"
          classname="py-3 mb-10"
        >
          Create New Objective
        </SolidButton>
      </View>
      {sheetVisible && <CreateObjectiveBottomSheet toggleSheet={toggleSheet} />}
    </SafeAreaView>
  );
};
export default ObjectivesScreen;
