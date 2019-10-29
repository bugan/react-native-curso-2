const registrarComentario = conteudo => {
  const novoComentario = {
    date: Date.now(),
    text: conteudo,
    userName: "Bugan"
  };

  return novoComentario;
};

export default registrarComentario;
