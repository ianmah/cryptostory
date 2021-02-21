import React from 'react'
import styled from 'styled-components'
import Character from './Character'

const Container = styled.div`
    margin: 1em;
`

const CharacterContainer = styled.div`
    display: inline-block;
    text-align: center;
    padding: 20px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);
    img {
      float: left;
      height: 150px;
      width: 100px;
      object-fit: cover;
    }
    
    &:hover {
      box-shadow: inset 7px 15px 20px -7px rgba(0, 0, 0, 0.6);
    }
    &.selected {
      box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.6);
    }
`

const Characters = ({characters, selected, setCharacter, setAttack = () => {}}) => {

    const handleClick = (character) => {
        const characterAttack = character.attack.toNumber()
        const characterItems = {
            2000: true,
            12000: true,
            1060026: true,
            1040036: true,
            [character.hair]: true,
            [character.face]: true,
        }
        setCharacter(characterItems)
        setAttack(characterAttack)
    }
    
    return (
        <Container>
            
            {
                characters.map((character, key) => {
                    const characterItems = {
                        2000: true,
                        12000: true,
                        1060026: true,
                        1040036: true,
                        [character.hair]: true,
                        [character.face]: true,
                    }
                    return <CharacterContainer key={key} className={character === selected ? "selected" : "not-selected"} onClick={() => handleClick(character)} >
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