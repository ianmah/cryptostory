import React, { useState } from 'react';
import styled from 'styled-components';

const MintWrapper = styled.div`
  display: inline-block;
  float: right;
`;

const StyledButton = styled.button`
  width: 90px;
  font-family: 'Cool-font';
`;
const StyledInput = styled.input`
  font-family: 'Cool-font';
`;

const Minter = ({ account, contract, allItems, setAllItems }) => {
  const [item, setItem] = useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const mint = (item) => {
    contract.methods
      .mint(item)
      .send({ from: account })
      .once('receipt', (receipt) => {
        setAllItems({ allItems: [...allItems, item] });
      });
  };

  return (
    <MintWrapper>
      <form
        onSubmit={() => {
          mint(item);
        }}
      >
        <StyledInput
          placeholder="Enter an item id"
          onChange={(e) => handleChange(e)}
          type="text"
        />
        <StyledButton>Mint</StyledButton>
      </form>
    </MintWrapper>
  );
};

export default Minter;
