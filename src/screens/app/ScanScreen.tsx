import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "../../components/Carousel";

const data = [
  {
    key: "1",
    name: "Karun Bashyal",
    cardNumber: "12345678987654321074",
    expiry: { mm: "01", yy: "25" },
  },
  {
    key: "2",
    name: "Ram Bahadur Thapa",
    cardNumber: "12345678987654321074",
    expiry: { mm: "12", yy: "26" },
  },
  {
    key: "3",
    name: "Julia Costa",
    cardNumber: "12345678987654321074",
    expiry: { mm: "11", yy: "24" },
  },
  {
    key: "4",
    name: "Hari Karki",
    cardNumber: "12345678987654321074",
    expiry: { mm: "05", yy: "23" },
  },
];

const ScanScreen = () => {
  return (
    <SafeAreaView>
      <Text>ScanScreen</Text>
      <Carousel data={data} pagination={true} />
    </SafeAreaView>
  );
};
export default ScanScreen;
