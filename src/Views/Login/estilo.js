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
  },
  mensagemErro: {
    color: "#ff0000",
    marginTop: 10
  }
});

export default estilo;
