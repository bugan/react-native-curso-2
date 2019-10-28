import React, { Fragment, useState, useEffect } from "react";
import { View, Button } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Button
        title="teste"
        onPress={() => navigation.navigate("Home", { name: "teste" })}
      />
    </View>
  );
};

Login.navigationOptions = navigation => {
  return {
    title: "teste"
  };
};
export default Login;
