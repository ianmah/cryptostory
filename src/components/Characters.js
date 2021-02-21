import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Character from './Character'

const Container = styled.div`
    margin: 1em 0;
`


const Characters = ({characters, setCharacter}) => {

    const characterItems = characters.map(character => ({
        2000: true,
        12000: true,
        [character.hair]: true,
        [character.face]: true,
    }))
    
    return (
        <Container>
            Characters
            <br/>
            
            {characterItems.map((character) => (
                <Character items={character} onClick={() => setCharacter(character)} action="stand1" />
            ))}
            
        </Container>
    )
    
}

export default Characters