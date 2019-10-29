import React, { Fragment, useState, useEffect } from "react";
import { ScrollView, FlatList } from "react-native";
import { Cabecalho } from "../Components/Cabecalho";
import { Foto } from "../Components/Foto";
import { Comentarios } from "../Components/Comentarios";
import lerFotos from "../api/feed";
import { curtirFoto, SeleecionaImgLike } from "../api/curtidas";
import registrarComentario from "../api/comentarios";

const Feed = () => {
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
              SelecionaImgLike={SeleecionaImgLike}
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
export default Feed;
