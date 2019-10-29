import React, { Fragment, useState } from "react";
import { TextInput, Button, View } from "react-native";
import estilo from "./estilo";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

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
      </View>

      <Button title="Entrar" onPress={() => console.warn(usuario)} />
    </Fragment>
  );
};
export default Login;
