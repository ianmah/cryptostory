import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: red;
`

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