import React, { useState } from "react";
import styled from "styled-components";
import Character from "./components/Character";
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
const items = [
  {
    itemId: 2000,
    version: "220",
  },
  {
    itemId: 12000,
    version: "220",
  },
];

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
      <Character character={{ items }} action="stand1" />
      <Monster />
      <Inventory />
      <Storage inventory={inventory}/>
    </Container>
  );
}

export default App;
