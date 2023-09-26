import { View, Text, FlatList } from "react-native";
import Typography from "../Typography";
import { SolidButton } from "../Buttons";
import Animated, { SlideOutDown, SlideOutLeft } from "react-native-reanimated";
import { Dispatch, SetStateAction, useState } from "react";
import AssociationBtn from "./AssociationBtn";

type FirstStepProps = {
  setStep: Dispatch<SetStateAction<number>>;
};

const FirstStep = (props: FirstStepProps) => {
  const { setStep } = props;
  const [active, setActive] = useState(false);
  const exitingAnimationFunction = active ? SlideOutLeft : SlideOutDown;

  return (
    <Animated.View exiting={exitingAnimationFunction} className="flex-1">
      <Typography variant="B1B" classname="text-main-normal">
        Step 1: Choose Association
      </Typography>
      <View className="flex-1">
        <FlatList
          snapToInterval={118 + 20}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={AssociationList}
          renderItem={({ item }) => (
            <View
              className="justify-center"
              style={{
                marginRight: 20,
              }}
            >
              <AssociationBtn name={item.name} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <SolidButton
        state={active ? "active" : "disabled"}
        onPress={() => setStep(2)}
        bgColor="main-normal"
        borderRadius="full"
        textVariant="B2B"
        classname="py-3 mb-8"
      >
        Next Step
      </SolidButton>
    </Animated.View>
  );
};
export default FirstStep;

const AssociationList = [
  { id: "1", name: "1" },
  { id: "2", name: "2" },
  { id: "3", name: "3" },
  { id: "4", name: "4" },
  { id: "5", name: "5" },
  { id: "6", name: "6" },
];
