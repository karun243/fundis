import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreditCard from "../../../components/CreditCard";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-violet-400 flex-1 items-center justify-center">
      {/* <Text>HomeScreen</Text> */}
      <CreditCard
        cardNumber="00000000000000001234"
        name="CARDHOLDER NAME"
        expiry={{ mm: 0o0, yy: 0o0 }}
      />
      <StatusBar translucent backgroundColor="transparent" />
    </SafeAreaView>
  );
};
export default HomeScreen;
