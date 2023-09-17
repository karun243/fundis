import Switch from "react-native-ui-lib/switch";
import { cs } from "../customStyles/colorStyle";

type SwitchButtonProps = {
  val: boolean;
  onValChange: () => void;
};

const SwitchButton = (props: SwitchButtonProps) => {
  const { val, onValChange } = props;
  return (
    <Switch
      height={16}
      width={27}
      thumbSize={11}
      thumbColor="#FFFFFE"
      value={val}
      onValueChange={onValChange}
      onColor={cs["main-normal"]}
      offColor={cs["icon-disabled"]}
    />
  );
};
export default SwitchButton;
