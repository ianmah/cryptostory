import React from 'react'
import styled from 'styled-components'

// Request URL: https://maplestory.io/api/GMS/220/item/1102144/icon
const StyledImg = styled.img`
    min-height: 64px;
    image-rendering: pixelated;
    padding: 10px;
    &:hover {
        outline: 3px solid black;
    }
`
const Item = ({id, ...props}) => {
    
    return (
        <StyledImg src={`https://maplestory.io/api/GMS/220/item/${id}/icon`} alt='Item' {...props}/>
    )
    
}

export default Item