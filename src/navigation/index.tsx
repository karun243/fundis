import { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { View } from "react-native";

// Keep the splash screen visible while the app is getting ready...
preventAutoHideAsync();

const Navigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function prepare() {
      // add code to load data required for the app... for now we are using timeout...
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsLoading(false);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (!isLoading) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await hideAsync();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }
  return (
    <NavigationContainer>
      <View className="flex flex-1" onLayout={onLayoutRootView}>
        {isLoggedIn ? (
          <AppStack setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <AuthStack />
        )}
      </View>
    </NavigationContainer>
  );
};
export default Navigator;
