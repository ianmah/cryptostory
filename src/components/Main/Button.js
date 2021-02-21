import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: white;
  background-color: #12a4df;
  border: none;
  border-radius: 12px;
  width: 4em;
  height: 7em;
  margin-right: 1em;
  flex-basis: calc(50% - 20px);
  font-family: 'Cool-font';
  box-shadow: -6px 6px #1778b2, -3px 3px #1778b2, -1px 1px #1778b2;
  transition: all 0.09s ease;
  margin-bottom: 1em;

  &:active {
    transform: translate(-2px, 2px);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
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