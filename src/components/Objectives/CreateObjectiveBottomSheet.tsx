import { StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { useState } from "react";

type CreateObjectiveBottomSheetProps = {
  toggleSheet: () => void;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const CreateObjectiveBottomSheet = (props: CreateObjectiveBottomSheetProps) => {
  const { toggleSheet } = props;
  const [step, setStep] = useState(1);

  const offset = useSharedValue(0);

  const pan = Gesture.Pan().onChange((event) => {
    const offsetDelta = offset.value + event.changeY;
    offset.value = offsetDelta > 0 ? offsetDelta : 0;
    if (offset.value < 80) {
      offset.value = withSpring(0);
    } else {
      offset.value = withTiming(
        400,
        { duration: 400, easing: Easing.inOut(Easing.ease) },
        () => {
          runOnJS(toggleSheet)();
        }
      );
    }
  });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return (
    // <GestureHandlerRootView style={StyleSheet.absoluteFill}>
    <AnimatedPressable
      entering={FadeIn.duration(400).easing(Easing.ease)}
      exiting={FadeOut}
      onPress={toggleSheet}
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: "rgba(0, 18, 26, 0.8)" },
      ]}
    >
      <AnimatedPressable
        entering={SlideInDown.duration(400).easing(Easing.ease)}
        exiting={SlideOutDown}
        className="bg-white absolute bottom-0 left-0 right-0 h-[400] flex-1"
        style={translateY}
      >
        {/* <GestureDetector  gesture={pan}> */}
        <View className="mx-4 flex-1">
          <View className="h-[5px] w-8 rounded-full my-4 self-center bg-main-light" />
          {step === 1 && <FirstStep setStep={setStep} />}
          {step === 2 && <SecondStep />}
        </View>
        {/* </GestureDetector> */}
      </AnimatedPressable>
    </AnimatedPressable>
    // </GestureHandlerRootView>
  );
};
export default CreateObjectiveBottomSheet;
