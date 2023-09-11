import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "../../components/Typography";
import {
  OutlinedButton,
  SolidButton,
  TextButton,
} from "../../components/Button";

import LoadingIcon from "../../assets/icons/loading";
import LocationPinIcon from "../../assets/icons/location_pin";
import LogoutIcon from "../../assets/icons/logout";
import MailIcon from "../../assets/icons/mail";
import MerchantIcon from "../../assets/icons/merchant";
import NotificationIcon from "../../assets/icons/notification";
import OverviewIcon from "../../assets/icons/overview";
import PhoneIcon from "../../assets/icons/phone";
import PlayIcon from "../../assets/icons/play";
import ProfileIcon from "../../assets/icons/profile";
import RepeatIcon from "../../assets/icons/repeat";
import RoleIcon from "../../assets/icons/role";
import ScanIcon from "../../assets/icons/scan";
import SearchIcon from "../../assets/icons/search";
import SettingIcon from "../../assets/icons/setting";
import ShowIcon from "../../assets/icons/show";
import HideIcon from "../../assets/icons/hide";
import SortIcon from "../../assets/icons/sort";
import SupportFilledIcon from "../../assets/icons/support_filled";
import SupportIcon from "../../assets/icons/support";
import ThemeIcon from "../../assets/icons/theme";
import TickCircledIcon from "../../assets/icons/tick_circled";
import TickIcon from "../../assets/icons/tick";
import TransactionIcon from "../../assets/icons/transaction";
import TrendingDownIcon from "../../assets/icons/trending_down";
import TrendingUpIcon from "../../assets/icons/trending_up";
import UploadIcon from "../../assets/icons/upload";
import Users2Icon from "../../assets/icons/users_2";
import VerifiedIcon from "../../assets/icons/verified";

const PlaygroundScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      {/* <OutlinedButton
        borderColor="state-error-base"
        borderRadius="md"
        // icon=<CameraIcon />
        onPress={() => console.log("Pressed")}
        state="active"
        textVariant="C1B"
      >
        Close
      </OutlinedButton> */}
      {/* <SolidButton
        borderRadius="full"
        bgColor="main-normal"
        // fullWidth
        className="px-5 py-2 "
        icon=<CameraIcon />
        onPress={() => console.log("Pressed")}
        state="active"
        textVariant="B2B"
      >
        Logout
      </SolidButton> */}

      <VerifiedIcon iconColor="state-error-base" />
      <VerifiedIcon iconColor="main-normal-hover" />
      <VerifiedIcon iconColor="state-success-dark" />
      <VerifiedIcon iconColor="state-warning-dark" />
    </SafeAreaView>
  );
};
export default PlaygroundScreen;
