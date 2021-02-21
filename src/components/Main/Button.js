import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: red;
  width: em;
  height: 6em;
  flex-basis: calc(50% - 20px);
`;

export default function Button (props){
    return (
      <StyledButton
        onClick={props.onClick}
        {...props}
      >
        {props.children}
      </StyledButton>
    );
}