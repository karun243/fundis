import { View, Text, useWindowDimensions } from "react-native";
import Typography from "../Typography";
import { OutlinedButton, SolidButton } from "../Buttons";
import Animated, { SlideInRight } from "react-native-reanimated";
import { cs } from "../../customStyles/colorStyle";
import { Slider } from "react-native-ui-lib";
import { useState } from "react";
import CalendarIcon from "../../assets/icons/calendar";

const SecondStep = () => {
  const [amount, setAmount] = useState(0);
  const { width } = useWindowDimensions();
  const handleSliderValueChange = (value: number) => {
    // console.log(value);
    setAmount(value);
  };
  return (
    <Animated.View entering={SlideInRight} className="flex-1">
      <Typography variant="B1B" classname="text-main-normal">
        Step 2: Set Amount
      </Typography>
      <Typography variant="B2S" classname="text-text-heading my-2">
        Select amount to donate
      </Typography>
      <View className="flex-1">
        {/* slider section */}
        <View className="flex-row justify-center items-center">
          <Typography variant="B2B" classname="text-text-body flex-1 text-left">
            0 €
          </Typography>
          <Slider
            containerStyle={{
              height: 50,
              width: width * 0.7,
              // marginHorizontal: 10,
            }}
            minimumValue={0}
            maximumValue={50}
            minimumTrackTintColor={cs["main-normal"]}
            maximumTrackTintColor={cs["main-light-hover"]}
            thumbTintColor={cs["main-normal"]}
            trackStyle={{ height: 6 }}
            step={1}
            thumbStyle={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 0,
            }}
            activeThumbStyle={{
              width: 24,
              height: 24,
              borderRadius: 12,
              borderWidth: 0,
            }}
            onValueChange={handleSliderValueChange}
          />

          <Typography
            variant="B2B"
            classname="text-main-normal flex-1 text-right"
          >
            {amount} €
          </Typography>
        </View>
        <View className="flex-row justify-between my-2">
          <View className="items-center">
            <Typography variant="B2S" classname="text-text-heading">
              Start Date
            </Typography>
            <OutlinedButton
              textVariant="C1S"
              icon=<CalendarIcon iconColor="main-normal" />
              borderThickness={1}
              borderRadius="sm"
              state="active"
              borderColor="line-light"
              classname="py-3 my-2"
            >
              01/02/2020
            </OutlinedButton>
          </View>
          <View className="items-center">
            <Typography variant="B2S" classname="text-text-heading">
              End Date
            </Typography>
            <OutlinedButton
              textVariant="C1S"
              icon=<CalendarIcon iconColor="main-normal" />
              borderThickness={1}
              borderRadius="sm"
              state="active"
              borderColor="line-light"
              classname="py-3 my-2"
            >
              01/02/2020
            </OutlinedButton>
          </View>
        </View>
      </View>
      <SolidButton
        onPress={() => console.log("next step")}
        bgColor="main-normal"
        borderRadius="full"
        textVariant="B2B"
        classname="py-3 mb-8"
      >
        Create this Objective
      </SolidButton>
    </Animated.View>
  );
};
export default SecondStep;
