import { View, ScrollView, useWindowDimensions } from "react-native";
import Pagination from "./Pagination";
import CreditCard from "../CreditCard";
import { useState } from "react";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

type CarouselProps = {
  pagination?: boolean;
  data: {
    key: string;
    name?: string;
    cardNumber?: string;
    expiry?: { mm: string; yy: string };
  }[];
};

const Carousel = (props: CarouselProps) => {
  const { data, pagination } = props;
  const { width } = useWindowDimensions();
  const SIZE = width * 0.9;
  const SPACER = width * 0.05;
  const [newData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
  ]);

  // reanimated
  const x = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    x.value = event.contentOffset.x;
  });

  return (
    <>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SIZE}
        onScroll={scrollHandler}
      >
        {newData.map((item, index) => {
          const animatedStyle = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
              [0.8, 1, 0.8]
            );
            return { transform: [{ scale }] };
          });

          if (!item.name) {
            return <View key={item.key} style={{ width: SPACER }} />;
          } else
            return (
              <CreditCard
                key={item.key}
                name={item.name}
                cardNumber={item.cardNumber!}
                expiry={item.expiry!}
                cardStyle={animatedStyle}
              />
            );
        })}
      </Animated.ScrollView>
      {pagination && <Pagination data={data} x={x} size={SIZE} />}
    </>
  );
};
export default Carousel;
