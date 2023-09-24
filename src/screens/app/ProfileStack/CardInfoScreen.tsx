import { useNavigation } from "@react-navigation/native";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ViewToken,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackIcon } from "../../../assets/icons";
import Typography from "../../../components/Typography";
import { SolidButton } from "../../../components/Buttons";
import Carousel from "../../../components/Carousel";
import RecentTransactionCard from "../../../components/TransactionCard";
import PlusIcon from "../../../assets/icons/plus";
import { useSharedValue } from "react-native-reanimated";

const CardInfoScreen = () => {
  const navigation = useNavigation();

  const viewableItemsSV = useSharedValue<ViewToken[]>([]);

  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF]">
      <View className="flex-1 mx-4 flex-col">
        {/* back button */}
        <TouchableOpacity
          onPress={() =>
            // navigation.navigate("ProfileS", { initialRoute: "Profile" })
            navigation.goBack()
          }
          className="py-3"
        >
          <BackIcon />
        </TouchableOpacity>
        {/* heading */}
        <View className="flex-row items-center justify-between">
          <Typography variant="H6" classname="text-main-normal">
            Card Information
          </Typography>
          <SolidButton
            onPress={() => navigation.navigate("AddCard")}
            textVariant="C1B"
            borderRadius="sm"
            bgColor="main-light-hover"
            classname="px-2 py-2"
            textClassName="text-main-normal-hover pr-2"
            icon={<PlusIcon />}
          >
            Add Card
          </SolidButton>
        </View>
        {/* dummy text */}
        <Typography variant="C1S" classname="text-text-placeholder mt-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        {/* card carousel */}
        <View className="-mx-4 my-4">
          <Carousel data={data} pagination={true} />
        </View>
        {/* recent transaction list */}
        <View className="bg-[#F7F8FA] flex-1 -mx-4 rounded-t-3xl pt-4 px-4">
          <Typography variant="B2B" classname="text-text-heading mb-2">
            Recent transactions
          </Typography>
          <FlatList
            data={transactionData}
            onViewableItemsChanged={({ viewableItems }) => {
              // console.log(viewableItems);
              viewableItemsSV.value = viewableItems;
            }}
            ListFooterComponent={<View className="h-3" />}
            // ListHeaderComponent={<View className="h-3" />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <RecentTransactionCard
                  viewableItems={viewableItemsSV}
                  item={item}
                />
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CardInfoScreen;

const data = [
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
];

const transactionData = [
  {
    id: "1",
    imgSource: require("../../../assets/images/image_2.png"),
    name: "Tampereen sisu",
    date: "12 hours ago",
    amount: "23,90",
  },
  {
    id: "2",
    imgSource: require("../../../assets/images/Suomen_image.png"),
    name: "Tampereen sisu",
    date: "12 hours ago",
    amount: "23,90",
  },
  {
    id: "3",
    imgSource: require("../../../assets/images/image_2.png"),
    name: "Tampereen sisu",
    date: "12 hours ago",
    amount: "23,90",
  },
  {
    id: "4",
    imgSource: require("../../../assets/images/Suomen_image.png"),
    name: "Tampereen sisu",
    date: "12 hours ago",
    amount: "23,90",
  },
  {
    id: "5",
    imgSource: require("../../../assets/images/image_2.png"),
    name: "Tampereen sisu",
    date: "12 hours ago",
    amount: "23,90",
  },
  {
    id: "6",
    imgSource: require("../../../assets/images/Suomen_image.png"),
    name: "Tampereen sisu",
    date: "12 hours ago",
    amount: "23,90",
  },
  {
    id: "7",
    imgSource: require("../../../assets/images/image_2.png"),
    name: "Tampereen sisu",
    date: "12 hours ago",
    amount: "23,90",
  },
  {
    id: "8",
    imgSource: require("../../../assets/images/Suomen_image.png"),
    name: "Tampereen sisu",
    date: "12 hours ago",
    amount: "23,90",
  },
  {
    id: "9",
    imgSource: require("../../../assets/images/image_2.png"),
    name: "Tampereen sisu",
    date: "12 hours ago",
    amount: "23,90",
  },
  {
    id: "10",
    imgSource: require("../../../assets/images/Suomen_image.png"),
    name: "Tampereen sisu",
    date: "12 hours ago",
    amount: "23,90",
  },
];
