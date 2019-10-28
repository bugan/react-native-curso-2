import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Feed from "./src/Conteiners/Feed";
import Login from "./src/Conteiners/Login";

const MainNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Feed }
  },
  {
    headerMode: "none"
  }
);

const App = createAppContainer(MainNavigator);
export default App;
