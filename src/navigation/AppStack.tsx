import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import TabBar from "../components/BottomTabBar/TabBar";

// screens
import {
  AddCardScreen,
  AssociationScreen,
  CardInfoScreen,
  ChangePasswordScreen,
  FavoritesScreen,
  HomeScreen,
  LogoutConfirmationModal,
  ObjectivesScreen,
  ProfileScreen,
  ScanScreen,
  SelectLanguageModal,
} from "../screens/app";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Association" component={AssociationScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Favorite" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Home Screens */}
      <Stack.Screen name="HomeS" component={Tabs} />
      {/* Association Screens */}
      <Stack.Screen name="AssociationS" component={Tabs} />
      {/* ScanPay Screens */}
      <Stack.Screen name="ScanPay" component={Tabs} />
      {/* Favorite Screens */}
      <Stack.Screen name="FavoriteS" component={Tabs} />
      {/* Profile Screens */}
      <Stack.Screen name="ProfileS" component={Tabs} />
      <Stack.Screen name="AddCard" component={AddCardScreen} />
      <Stack.Screen name="CardInfo" component={CardInfoScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="Objectives" component={ObjectivesScreen} />
      <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
        <Stack.Screen name="SelectLanguage" component={SelectLanguageModal} />
        <Stack.Screen
          name="LogoutConfirmation"
          component={LogoutConfirmationModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default AppStack;
