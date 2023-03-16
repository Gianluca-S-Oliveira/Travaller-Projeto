import logo from "./logo.svg";

import Menu from "./pages/Menu/menu";
import ThemeProvider from "styled-components";
import { useState } from "react";
import Home from "./pages/Home/home";
import Text from "./pages/Text/text";
import Tempo from "./pages/Tempo/tempo";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Home></Home>
      <Text></Text>
      <Tempo></Tempo>
    </div>
  );
}

export default App;
