import { View, Image, useWindowDimensions } from "react-native";
import Typography from "../Typography";

const EmptyObjective = () => {
  const { width } = useWindowDimensions();
  const W = width * 0.7;

  return (
    <>
      <View
        className="bg-main-light-hover rounded-full items-center justify-center self-center"
        style={{ height: width * 0.85, width: width * 0.85 }}
      >
        <View
          className="items-center justify-center bg-main-light rounded-full"
          style={{ height: width * 0.8, width: width * 0.8 }}
        >
          <Image
            style={{ height: W, width: W }}
            source={require("../../assets/images/ObjectiveImage.png")}
          />
        </View>
      </View>

      <Typography variant="H6" classname="text-main-normal self-center mt-4">
        Oops!
      </Typography>
      <Typography variant="B2B" classname="text-text-heading self-center mt-1">
        You haven’t set any objectives yet.
      </Typography>
    </>
  );
};
export default EmptyObjective;
