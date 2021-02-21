import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from './Item';
import Character from './Character';

const Container = styled.div`
  margin: 1em 0;
  text-align: center;
`;

const Preview = styled.div`
display: flex;
justify-content: center;
align-items: center;
  width: 100%;
  height: 250px;
  background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d34a59be-b3d6-4b35-a43b-66b0685de866/da1e7rd-72face96-045a-4e6b-9c3f-80437eb11d52.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDM0YTU5YmUtYjNkNi00YjM1LWE0M2ItNjZiMDY4NWRlODY2XC9kYTFlN3JkLTcyZmFjZTk2LTA0NWEtNGU2Yi05YzNmLTgwNDM3ZWIxMWQ1Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lFhK4oX68ArXWQYRubNQCGxCgt9Cad3991fLSHWyD9Q);
  background-position: left bottom;
  background-size: 250%;
`;

const AbsoluteCharacter = styled(Character)`

`;

const InventoryWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
`;

const InventoryGrid = styled.div`
  width: 84px;
  border: lightgrey solid 1.6px;
  border-radius: 2px;
  margin: 0.4em;
  box-shadow: inset 7px 15px 6px -7px rgba(0, 0, 0, 0.25);
  transition: all 0.05s ease-in;

  &:hover {
    box-shadow: inset 7px 15px 20px -7px rgba(0, 0, 0, 0.6);
  }
  &.equipped {
    box-shadow: inset 7px 15px 20px -7px rgba(0, 0, 0, 0.6);
    border: rgba(0, 0, 0, 0.6) solid 1.6px;
  }
`;

const Storage = ({ character = {}, setCharacter, inventory, attack, setAttack }) => {

  const equip = (item) => {
    const newItems = { ...character };
    newItems[item.id] = !newItems[item.id];
    setCharacter(newItems);

    if (newItems[item.id]) {
      setAttack(attack + item.attack);
    } else {
      setAttack(attack - item.attack);
    }
  };

  return (
    <Container>
      Inventory
      <br />
      <Preview>
        <AbsoluteCharacter items={character} action="stand1" />
      </Preview>{' '}
      <br />
      Total Attack: {attack}
      <br />
      <InventoryWrapper>
        {inventory.items.map((item) => (
          <InventoryGrid
            key={item.id}
            className={character[item.id] ? 'equipped' : 'not-equipped'}
          >
            <Item key={item.id} onClick={() => equip(item)} id={item.id} />
          </InventoryGrid>
        ))}
      </InventoryWrapper>
    </Container>
  );
};

export default Storage;
