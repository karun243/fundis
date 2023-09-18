import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AssociationScreen,
  FavoritesScreen,
  HomeScreen,
  ProfileScreen,
  ScanScreen,
} from "../screens/app";

import TabBar from "../components/BottomTabBar/TabBar";

const { Navigator, Screen } = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Association" component={AssociationScreen} />
      <Screen name="Scan" component={ScanScreen} />
      <Screen name="Favorite" component={FavoritesScreen} />
      <Screen name="Profile" component={ProfileScreen} />
    </Navigator>
  );
};
export default AppStack;
