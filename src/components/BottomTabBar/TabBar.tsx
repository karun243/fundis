import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import TabShape from "./TabShape";
import {
  AssociationIcon,
  HeartIcon,
  HomeIcon,
  ProfileIcon,
} from "../../assets/icons";
import ScanBtn from "../../assets/icons/scanbtn";

const { width } = Dimensions.get("window");
const TAB_HEIGHT = 80;

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.myTabBarContainer}>
      <TabShape />
      <View style={StyleSheet.absoluteFill}>
        <View className="flex-row h-full items-stretch space-x-1">
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({ name: route.name, merge: true });
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            const ICONS = [
              <View className="items-center">
                <HomeIcon
                  iconColor={isFocused ? "main-normal" : "icon-default"}
                />
                <Text
                  className={
                    isFocused ? "text-main-normal" : "text-icon-default"
                  }
                >
                  Home
                </Text>
              </View>,
              <View className="items-center">
                <AssociationIcon
                  iconColor={isFocused ? "main-normal" : "icon-default"}
                />
                <Text
                  className={
                    isFocused ? "text-main-normal" : "text-icon-default"
                  }
                >
                  Association
                </Text>
              </View>,
              <View className="-translate-y-14">
                <ScanBtn />
              </View>,
              <View className="items-center">
                <HeartIcon
                  iconColor={isFocused ? "main-normal" : "icon-default"}
                />
                <Text
                  className={
                    isFocused ? "text-main-normal" : "text-icon-default"
                  }
                >
                  Favorite
                </Text>
              </View>,
              <View className="items-center">
                <ProfileIcon
                  iconColor={isFocused ? "main-normal" : "icon-default"}
                />
                <Text
                  className={
                    isFocused ? "text-main-normal" : "text-icon-default"
                  }
                >
                  Profile
                </Text>
              </View>,
            ];

            return (
              <Pressable
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                className={`flex-1 items-center justify-center`}
              >
                {ICONS[index]}
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};
export default TabBar;

const styles = StyleSheet.create({
  myTabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: TAB_HEIGHT,
    width,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    elevation: 5,
  },
});
