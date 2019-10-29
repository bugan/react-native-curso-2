import { StyleSheet, Dimensions } from "react-native";

let largura = Dimensions.get("screen").width;
const estilo = StyleSheet.create({
  formContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  formInput: {
    width: largura * 0.8,
    borderBottomColor: "#eee",
    borderBottomWidth: 1.5
  }
});

export default estilo;
