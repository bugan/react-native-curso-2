import React from "react";
import Feed from "./src/Views/Feed/Feed";
import Login from "./src/Views/Login/Login";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
});
const AppConteiner = createAppContainer(AppNavigator);

const App = () => {
  return <AppConteiner />;
};

export default App;
