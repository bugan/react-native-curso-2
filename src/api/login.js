const efetuaLogin = (usuario, senha) => {
  const uri = "http://10.0.2.2:3030/users/login";

  const cabecalhoHTTP = {
    method: "POST",
    body: JSON.stringify({
      userName: usuario,
      password: senha
    }),
    headers: new Headers({
      "Content-type": "application/json"
    })
  };

  return fetch(uri, cabecalhoHTTP)
    .then(res => {
      if (res.ok) {
        return res.headers.get("x-access-token");
      } else {
        throw new Error("Não foi possível efetuar login");
      }
    })
    .then(token => console.warn(token));
};

export default efetuaLogin;
