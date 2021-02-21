import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Character from './Character'

const Container = styled.div`
    margin: 1em 0;
`

const Characters = ({characters, setCharacter}) => {
    
    return (
        <Container>
            Characters
            <br/>
            
            {
                characters.map((character) => {
                    const characterItems = {
                        2000: true,
                        12000: true,
                        [character.hair]: true,
                        [character.face]: true,
                    }
                    return <Character items={characterItems} onClick={() => {
                        setCharacter(character)
                    }} action="stand1" />
                })
            }
            
        </Container>
    )
    
}

export default Characters