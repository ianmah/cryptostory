import React from 'react';
import styled from 'styled-components'
import Button from './Button'

const AttackButton = styled(Button)`
  width: 15em;
  height: 15em;
  flex-basis: initial;
  font-family: 'Cool-font';
  background-color: #E64E2C;
  box-shadow: -6px 6px #BC381B, -3px 3px #BC381B, -1px 1px #BC381B;
`;

const InventoryButton = styled(Button)`
  background-color: blue;
`

const ShopButton = styled(Button)`
  background-color: brown;
`
const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 15em;
  background-color: #444444;
  border: #505050 solid 3px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const attack = (dmg = 0) => {
  window.ws.send(JSON.stringify({ attack: true, dmg }))
}

export default function Inventory(props) {
  return (
    <Section>
      <BtnContainer>
        <AttackButton onClick={() => attack(window.attack)}>Attack</AttackButton>
      </BtnContainer>
      <BtnContainer>
        <InventoryButton>Inventory</InventoryButton>
        <ShopButton>Shop</ShopButton>
        <Button>Breed</Button>
        <Button>Party</Button>
      </BtnContainer>
    </Section>
  );
}