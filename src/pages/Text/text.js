import React from "react";
import "./text.scss";
import ImgFundo from "../../images/fundo.jpg";
function Text() {
  return (
    <div className="text">
      <h2>Bem vindo ao Travaller, você sonha, nós realizamos.</h2>{" "}
      <img src={ImgFundo} alt="imagem fundo" className="imgfundo" />
    </div>
  );
}

export default Text;
