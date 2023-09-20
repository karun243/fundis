import { View, Text, useWindowDimensions, ViewStyle } from "react-native";
import CreditCardIcon from "../../assets/icons/credit_card";
import SignalIcon from "../../assets/icons/signal";
import Animated from "react-native-reanimated";

type CreditCardProps = {
  cardNumber: string;
  name: string;
  expiry: { mm: string; yy: string };
  cardStyle?: ViewStyle;
};

const CreditCard = (props: CreditCardProps) => {
  const { cardNumber, name, expiry, cardStyle } = props;
  const { mm, yy } = expiry;

  const { width } = useWindowDimensions();
  const CARD_HEIGHT = 231;
  const CARD_WIDTH = width * 0.9;
  // Format the credit card number
  const formattedNumber = cardNumber!.match(/.{1,4}/g)?.join(" ") || "";

  return (
    <Animated.View
      style={[cardStyle, { width: CARD_WIDTH, height: CARD_HEIGHT }]}
      className={`bg-[#CED6E0] rounded-2xl items-center justify-center`}
    >
      <View className="h-[187px] w-[302px] space-y-2">
        <SignalIcon className="self-end" />
        <CreditCardIcon />
        <Text className="font-bold text-xl tracking-[2px]">
          {formattedNumber}
        </Text>
        <View className="flex-row items-end space-x-2 mx-auto -translate-x-4">
          <Text className="text-[8px] font-semibold pb-[4px]">
            VALID{`\n`}THRU
          </Text>
          <View className="">
            <Text className="text-[8px]  font-semibold translate-y-1">
              MONTH/YEAR
            </Text>
            <Text className="font-bold text-xl -tracking-widest">
              {mm}/ {yy}
            </Text>
          </View>
        </View>
        <Text className="font-bold text-lg tracking-[1px]">
          {name.toUpperCase()}
        </Text>
      </View>
    </Animated.View>
  );
};
export default CreditCard;
