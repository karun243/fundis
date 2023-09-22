import { View, Text, Image } from "react-native";
import Typography from "../Typography";

const RecentTransactionCard = (props) => {
  const { item } = props;
  return (
    <View
      style={{
        shadowColor: "rgba(50, 50, 57, 0.5)",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 1,
      }}
      className="flex-1 bg-white my-2 rounded-lg py-4 px-5 flex-row items-center space-x-2"
    >
      <View className="bg-main-light-hover rounded-full p-1">
        <Image className="h-7 w-7 " source={item.imgSource} />
      </View>
      <View className="flex-1">
        <Typography variant="C1B" classname="text-text-heading">
          {item.name}
        </Typography>
        <Typography variant="E1S" classname="text-text-subtitle">
          {item.date}
        </Typography>
      </View>
      <Typography variant="C1B" classname="text-text-heading">
        {`${item.amount} €`}
      </Typography>
    </View>
  );
};
export default RecentTransactionCard;
