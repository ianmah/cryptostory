import React from 'react';
import styled from 'styled-components'
import Button from './Button'

const AttackButton = styled(Button)`
  width: 15em;
  height: 15em;
  margin-right: 2em;
  flex-basis: initial;
`;
const InventoryButton = styled(Button)`
  background-color: blue;
`

const ShopButton = styled(Button)`
  background-color: brown;
`
const Section = styled.section`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  border: black solid 1px;
  height: 15em;
`

const BtnContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const attack = (dmg) => {
  window.ws.send(JSON.stringify({ attack: true, dmg }))
}

export default function Inventory(props) {
  return (
    <Section>
        <AttackButton onClick={() => attack(75)}>Attack</AttackButton>
      <BtnContainer>
        <InventoryButton>Inventory</InventoryButton>
        <ShopButton>Shop</ShopButton>
        <Button>Breed</Button>
        <Button>Party</Button>
      </BtnContainer>
    </Section>
  );
}