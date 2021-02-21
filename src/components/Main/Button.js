import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: white;
  background-color: #12A4DF;
  border: none;
  border-radius: 12px;
  width: 4em;
  height: 7em;
  margin-right: 1em;
  flex-basis: calc(50% - 20px);
  box-shadow: -6px 6px #1778B2, -3px 3px #1778B2, -1px 1px #1778B2;
  transition: all 0.09s ease;

  &:active {
    transform: translate(-2px, 2px);
  }

  &:focus {
    outline: none;
  }
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