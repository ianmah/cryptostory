import React, { useState } from "react";
import styled from "styled-components";
import Character from "./components/Character";
import Item from "./components/Item";
import ProgressBar from "./components/ProgressBar";

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
  const [inventory, setInventory] = useState({
    items: ["1001021", "1082059"],
  });

  return (
    <Container>
      <Character character={{ items }} action="stand1" />
      {inventory.items.map((item) => (
        <Item id={item} />
      ))}
      <ProgressBar percentage={66} />
    </Container>
  );
}

export default App;
