import { StyleSheet, Text, Pressable, View } from "react-native";
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

type CreateObjectiveBottomSheetProps = {
  toggleSheet: () => void;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const CreateObjectiveBottomSheet = (props: CreateObjectiveBottomSheetProps) => {
  const { toggleSheet } = props;

  const offset = useSharedValue(0);

  const pan = Gesture.Pan().onChange((event) => {
    const offsetDelta = offset.value + event.changeY;
    offset.value = offsetDelta > 0 ? offsetDelta : 0;
    if (offset.value < 50) {
      offset.value = withSpring(0);
    } else {
      offset.value = withTiming(400, {}, () => {
        runOnJS(toggleSheet)();
      });
    }
  });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <AnimatedPressable
        entering={FadeIn.duration(400).easing(Easing.ease)}
        exiting={FadeOut}
        onPress={toggleSheet}
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(0, 18, 26, 0.8)" },
        ]}
      >
        <GestureDetector gesture={pan}>
          <AnimatedPressable
            entering={SlideInDown.duration(400).easing(Easing.ease)}
            exiting={SlideOutDown}
            className="bg-white absolute bottom-0 left-0 right-0 h-[400]"
            style={translateY}
          >
            <Text>hello world</Text>
          </AnimatedPressable>
        </GestureDetector>
      </AnimatedPressable>
    </GestureHandlerRootView>
  );
};
export default CreateObjectiveBottomSheet;
