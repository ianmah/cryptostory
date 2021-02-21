import React from 'react'
import styled from 'styled-components'
import Characters from './Characters';

const MarketContainer = styled.div`
    left: 0;
    top: 0;
    ${p => !p.visible && 'display: none;'}
`

const Market = ({visible, characters, breed}) => {

    return (
        <MarketContainer visible={visible}>
            Market
            <Characters setCharacter={breed} characters={characters}/>
        </MarketContainer>
    )
}

export default Market