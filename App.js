import { ModalPortal } from "react-native-modals";
import StackNavigator from "./StackNavigator";
import { Provider } from "react-redux";
import store from "./Store"


export default function App() {
  return (
    <>
    <Provider store={store}>
      <StackNavigator />
      <ModalPortal />
      </Provider>
    </>
  );
}
