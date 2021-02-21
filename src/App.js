import React, { useState } from "react";
import styled from "styled-components";
import Monster from "./components/Monster";
import Signin from './components/Signin'
import initWebsocket from './util/websocket'
import Inventory from './components/Main/Inventory';
import Storage from './components/Storage';

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  background: #fff;
  height: 100vh;
`;
function App() {
  if (!window.ws) {
    initWebsocket()
  }

  const [inventory, setInventory] = useState({
    items: ["1001021", "1082059"],
  });

  return (
    <Container>
      <Signin />
      <Monster />
      <Inventory />
      <Storage inventory={inventory}/>
    </Container>
  );
}

export default App;
