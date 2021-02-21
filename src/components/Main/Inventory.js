import React from 'react';
import styled from 'styled-components'
import Button from './Button'

const AttackButton = styled(Button)`
  background-color: green;
`

const InventoryButton = styled(Button)`
  background-color: blue;
`

const ShopButton = styled(Button)`
  background-color: brown;
`
const Section = styled.section`
  display:flex;
  justify-content: space-evenly;
  border: black solid 1px;
  bottom: 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
`;

const attack = (dmg) => {
  window.ws.send(JSON.stringify({ attack: true, dmg }))
}

export default function Inventory(props) {
  return (
    <Section>
      <AttackButton onClick={() => attack(3333)}>Attack</AttackButton>
      <Grid>
        <InventoryButton>Inventory</InventoryButton>
        <ShopButton>Shop</ShopButton>
        <Button>Breed</Button>
        <Button>Party</Button>
      </Grid>
    </Section>
  );
}