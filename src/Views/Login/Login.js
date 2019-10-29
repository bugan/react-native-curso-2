import React, { Fragment, useState } from "react";
import { TextInput, Button, View, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import estilo from "./estilo";
import efetuaLogin from "../../api/login";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const tentaLogar = async () => {
    setMensagemErro("");
    try {
      const token = await efetuaLogin(usuario, senha);
      await AsyncStorage.setItem("Instalura:AuthToken", token);
      console.warn(token);
    } catch (err) {
      setMensagemErro(err.message);
    }
  };

  return (
    <Fragment>
      <View style={estilo.formContainer}>
        <TextInput
          style={estilo.formInput}
          autoFocus={false}
          placeholder="Usuário...."
          onChangeText={texto => setUsuario(texto)}
          onSubmitEditing={() => this.inputSenha.focus()}
          blurOnSubmit={false}
        />
        <TextInput
          style={estilo.formInput}
          secureTextEntry={true}
          placeholder="Senha..."
          onChangeText={texto => setSenha(texto)}
          ref={input => (this.inputSenha = input)}
        />
        <Text style={estilo.mensagemErro}>{mensagemErro}</Text>
      </View>

      <Button title="Entrar" onPress={tentaLogar} />
    </Fragment>
  );
};
export default Login;
