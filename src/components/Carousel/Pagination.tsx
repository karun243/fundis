import { View, Text } from "react-native";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { cs } from "../../customStyles/colorStyle";

type PaginationProps = {
  data: {
    key: string;
    name?: string | undefined;
    cardNumber?: string | undefined;
    expiry?:
      | {
          mm: string;
          yy: string;
        }
      | undefined;
  }[];
  x: SharedValue<number>;
  size: number;
};

const Pagination = (props: PaginationProps) => {
  const { data, x, size } = props;
  return (
    <View className="flex-row justify-center mt-5">
      {data.map((_, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          const animatedOpacity = interpolate(
            x.value,
            [(index - 1) * size, index * size, (index + 1) * size],
            [0.25, 1, 0.25],
            Extrapolate.CLAMP
          );
          const animatedColor = interpolateColor(
            x.value,
            [(index - 1) * size, index * size, (index + 1) * size],
            [cs["icon-disabled"], cs["main-normal"], cs["icon-disabled"]]
          );
          return {
            backgroundColor: animatedColor,
            opacity: animatedOpacity,
          };
        });
        return (
          <Animated.View
            style={animatedStyle}
            key={index}
            className="h-1 w-8 rounded-full mx-1"
          />
        );
      })}
    </View>
  );
};
export default Pagination;
