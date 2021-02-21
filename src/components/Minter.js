import React, { useState } from 'react';
import styled from 'styled-components';

const MintWrapper = styled.div`
  display: flex;
  float: right;
`;

const StyledButton = styled.button`
  width: 90px;
  font-family: 'Cool-font';
`;

const StyledInput = styled.input`
  width: 150px;
  font-family: 'Cool-font';
`;

const Minter = ({ account, charaContract, itemContract, allItems, setAllItems }) => {
  const [item, setItem] = useState('');

  const handleChange = (event) => {
    event.preventDefault()
    setItem(event.target.value);
  };

  const mintItem = (e, item) => {
    e.preventDefault()
    item && 
    itemContract.methods
      .mint(item)
      .send({ from: account })
      .once('receipt', (receipt) => {
        setAllItems({ allItems: [...allItems, item] });
      });
  };

  const mint = (e) => {
    
    e.preventDefault()
    charaContract.methods
      .mint()
      .send({ from: account })
      .once('receipt', (receipt) => {
      });
  }

  return (
    <MintWrapper>
      <form
        onSubmit={(e) => {
          mintItem(e, item);
        }}
      >
        <StyledInput
          placeholder="Enter an item id"
          onChange={(e) => handleChange(e)}
          type="text"
        />
        <StyledButton>Mint Item</StyledButton>
      </form>
      <StyledButton onClick={e => mint(e)}>Mint Character</StyledButton>
    </MintWrapper>
  );
};

export default Minter;
