import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./menu.scss";
import Logo from "../../images/logo.png";
import { Animated } from "react-animated-css";
// import { darkTheme } from "../../theme";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <></>

      <img src={Logo} alt="img logo" className="logo" height="60" width="70" />

      <nav ref={navRef}>
        <a href="/#">Hoteis</a>
        <a href="/#">Viajens</a>
        <a href="/#">Alimentação</a>
        <a href="/#">Aluguel Carros</a>
        <button
          className="nav-btn nav-close-btn close"
          onClick={showNavbar}
        ></button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
