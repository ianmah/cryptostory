import React, { useState } from "react";
import styled from "styled-components";
import Character from "./components/Character";
import Item from "./components/Item";
import ProgressBar from "./components/ProgressBar";
import Signin from './components/Signin'
import initWebsocket from './util/websocket'
import Inventory from './components/Main/Inventory';

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

const attack = (dmg) => {
  window.ws.send(JSON.stringify({ attack: true, dmg }))
}

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
      {inventory.items.map((item) => (
        <Item id={item} />
      ))}
      <ProgressBar percentage={66} />
      <Inventory />
    </Container>
  );
}

export default App;
