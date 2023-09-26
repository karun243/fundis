import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { cs } from "../../customStyles/colorStyle";
import { useState } from "react";
import TickSolidIcon from "../../assets/icons/tickSolid";

type AssociationBtnProps = {
  name: string;
};

const AssociationBtn = (props: AssociationBtnProps) => {
  const { name } = props;
  const [selected, setSelected] = useState(false);
  const toggleSelection = () => {
    setSelected(!selected);
  };

  return (
    <Pressable
      onPress={toggleSelection}
      className="border-[1px] border-main-light rounded-md h-[118] w-[118] items-center justify-center"
    >
      <Text>{name}</Text>
      {selected && (
        <View className="absolute -top-3 -right-3">
          <TickSolidIcon />
        </View>
      )}
    </Pressable>
  );
};
export default AssociationBtn;
