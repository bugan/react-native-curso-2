import React, { Fragment, useState, useEffect } from "react";
import { ScrollView, FlatList, Platform, Text } from "react-native";
import { Cabecalho } from "../../Components/Cabecalho";
import { Foto } from "../../Components/Foto";
import { Comentarios } from "../../Components/Comentarios";
import lerFotos from "../../api/feed";
import { curtirFoto, SelecionaImgLike } from "../../api/curtidas";
import registrarComentario from "../../api/comentarios";

const Feed = ({ navigation }) => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} urlImage={item.userURL} />
            <Foto
              urlFoto={item.url}
              descricao={item.description}
              qntLikes={item.likes}
              SelecionaImgLike={SelecionaImgLike}
              curtirFoto={curtirFoto}
            />
            <Comentarios
              comentarios={item.comentarios}
              registrarComentario={registrarComentario}
            />
          </Fragment>
        )}
      />
    </ScrollView>
  );
};

Feed.navigationOptions = ({ navigation }) => {
  const opcoes = {
    title: navigation.getParam("nome")
  };

  if (Platform.OS == "android") {
    opcoes.header = null;
  }

  return opcoes;
};

export default Feed;
