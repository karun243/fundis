import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

// Screens
import OnboardingScreen from "../screens/auth/OnboardingScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";

const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Screen name="Onboarding" component={OnboardingScreen} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Signup" component={SignupScreen} />

      {/* <Screen name="" component={} /> */}
    </Navigator>
  );
};

export default AuthStack;
