import { View, Image, useWindowDimensions } from "react-native";
import EmptyObjective from "./EmptyObjective";

const index = () => {
  const { width } = useWindowDimensions();
  const W = width * 0.7;

  return <EmptyObjective />;
};
export default index;
