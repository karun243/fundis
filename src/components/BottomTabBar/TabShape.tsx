import React from "react";
import { Dimensions, View } from "react-native";
import { curveBasis, line } from "d3-shape";
import Svg, { Path } from "react-native-svg";

const TAB_HEIGHT = 80;

const { width } = Dimensions.get("window");

const lineGenerator = line();

const rect = lineGenerator([
  [0, 0],
  // [width / 2, 0],
  [width, 0],
  [width, TAB_HEIGHT],
  [0, TAB_HEIGHT],
  [0, 0],
]);

// const center = lineGenerator.curve(curveBasis)([
//   [(width / 5) * 2 - 10, 0],
//   [(width / 5) * 2, 0],
//   [(width / 5) * 2 + 10, TAB_HEIGHT * 0.1],
//   [(width / 5) * 2 + 20, TAB_HEIGHT * 0.4],
//   [(width / 5) * 3 - 20, TAB_HEIGHT * 0.4],
//   [(width / 5) * 3 - 10, TAB_HEIGHT * 0.1],
//   [(width / 5) * 3, 0],
//   [(width / 5) * 3 + 10, 0],
// ]);
const center = lineGenerator.curve(curveBasis)([
  [width / 2 - 90, 0],
  [width / 2 - 45, 0],
  [width / 2 - 22, TAB_HEIGHT * 0.35],
  // [width / 2, TAB_HEIGHT * 0.5],
  [width / 2 + 22, TAB_HEIGHT * 0.35],
  [width / 2 + 45, 0],
  [width / 2 + 90, 0],
]);

const d = `${center} ${rect}`;

export default function TabShape() {
  return (
    <View className="rounded-t-3xl overflow-hidden">
      <Svg width={width} height={TAB_HEIGHT}>
        <Path fill="white" {...{ d }} />
      </Svg>
    </View>
  );
}
