import React from "react";
import "./home.scss";
import HomeImage from "../../images/home.png";
import Shape from "../../images/shape.png";
function Home() {
  return (
    <div className="banner">
      <div className="textbox">
        <img src={Shape} />
        <h2>ENCONTRE SUA PROXIMA VIAJEM AQUI</h2>
        <p>TE DAREMOS TODO SUPORTE NECESSÁRIO.</p>
        <a href="" className="botao">
          VAMOS LÁ!
        </a>
      </div>
      <div className="imgBox">
        <img src={HomeImage} alt="" />
      </div>
    </div>
  );
}

export default Home;
