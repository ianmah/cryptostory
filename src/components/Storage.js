import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Item from './Item'
import Character from './Character'

const Container = styled.div`
    margin: 1em 0;
    text-align: center;
`

const Preview = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  text-align: center;
  background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d34a59be-b3d6-4b35-a43b-66b0685de866/da1e7rd-72face96-045a-4e6b-9c3f-80437eb11d52.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDM0YTU5YmUtYjNkNi00YjM1LWE0M2ItNjZiMDY4NWRlODY2XC9kYTFlN3JkLTcyZmFjZTk2LTA0NWEtNGU2Yi05YzNmLTgwNDM3ZWIxMWQ1Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lFhK4oX68ArXWQYRubNQCGxCgt9Cad3991fLSHWyD9Q);
  background-position: left bottom;
  background-size: 250%;
`;

const AbsoluteCharacter = styled(Character)`
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 50px;
    position: absolute;

`

const baseBody = {
    2000: true,
    12000: true,
    1060026: true,
    1040036: true,
}

const Storage = ({character, inventory}) => {

    const [items, setItems] = useState(baseBody)
    const [attack, setAttack] = useState(0)
    
    useEffect(() => {
        if (character.hair) {
            setItems({
                ...baseBody,
                [character.hair]: true,
                [character.face]: true,
            })
        }
        setAttack(0)
    }, [character.hair, character.face])


    const equip = (item) => {
        const newItems = {...items}
        newItems[item.id] = !newItems[item.id]
        setItems(newItems)

        if (newItems[item.id]) {
            setAttack(attack + item.attack)
            window.attack = attack + item.attack
        }
        else {
            setAttack(attack - item.attack)
            window.attack = attack - item.attack
        }
        
    }

    
    return (
        <Container>
            Inventory
            <br/>
        <Preview>
          <AbsoluteCharacter items={items} action="stand1" />
        </Preview>            <br />
            Total Attack: {attack}
            <br />
            
            {inventory.items.map((item) => (
                <Item key={item.id} onClick={() => equip(item)} id={item.id} />
            ))}
            
        </Container>
    )
    
}

export default Storage