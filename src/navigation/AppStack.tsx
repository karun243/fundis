import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AssociationScreen,
  FavoritesScreen,
  HomeScreen,
  ProfileScreen,
  ScanScreen,
} from "../screens/app";

import {
  HomeIcon,
  AssociationIcon,
  ScanIcon,
  HeartIcon,
  ProfileIcon,
} from "../assets/icons";

const { Navigator, Screen } = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          position: "absolute",
          //   bottom: 20,
          //   left: 10,
          //   right: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <HomeIcon iconColor={focused ? "main-normal" : "icon-default"} />
              <Text
                className={focused ? "text-main-normal" : "text-icon-default"}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Screen
        name="Association"
        component={AssociationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <AssociationIcon
                iconColor={focused ? "main-normal" : "icon-default"}
              />
              <Text
                className={focused ? "text-main-normal" : "text-icon-default"}
              >
                Association
              </Text>
            </View>
          ),
        }}
      />
      <Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: () => (
            <View className="-translate-y-[41px]">
              <ScanIcon />
            </View>
          ),
        }}
      />
      <Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <HeartIcon iconColor={focused ? "main-normal" : "icon-default"} />
              <Text
                className={focused ? "text-main-normal" : "text-icon-default"}
              >
                Favorite
              </Text>
            </View>
          ),
        }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <ProfileIcon
                iconColor={focused ? "main-normal" : "icon-default"}
              />
              <Text
                className={focused ? "text-main-normal" : "text-icon-default"}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Navigator>
  );
};
export default AppStack;
