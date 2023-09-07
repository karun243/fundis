import "./src/locales/i18n";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/store";
import Navigator from "./src/navigation";

export default function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <StatusBar style="auto" />
      <Navigator />
      {/* </Provider> */}
    </>
  );
}
