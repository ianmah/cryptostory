import React from 'react'
import styled from 'styled-components'
import Character from './Character'

const Container = styled.div`
    margin: 1em 0;
`

const CharacterContainer = styled.div`
    display: inline-block;
    text-align: center;
    padding: 20px;
    
    &:hover {
        outline: 2px solid green;
    }
    &.equipped {
        box-shadow: inset 0 0 10px green;
    }
`

const Characters = ({characters, setCharacter, attack, setAttack}) => {

    const handleClick = (character) => {
        const characterAttack = character.attack.toNumber()
        setCharacter(character)
        setAttack(characterAttack)
    }
    
    return (
        <Container>
            Characters
            <br/>
            
            {
                characters.map((character) => {
                    const characterItems = {
                        2000: true,
                        12000: true,
                        1060026: true,
                        1040036: true,
                        [character.hair]: true,
                        [character.face]: true,
                    }
                    return <CharacterContainer onClick={() => handleClick(character)} >
                        <Character items={characterItems} action="stand1" />
                        <br />
                        Attack: {character.attack.toNumber()}
                    </CharacterContainer>
                })
            }
            
        </Container>
    )
    
}

export default Characters