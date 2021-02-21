import React, { useState } from 'react'
import styled from 'styled-components'
import Item from './Item'
import Character from './Character'

const Container = styled.div`
    margin: 1em 0;
`


const Storage = ({inventory}) => {

    const [items, setItems] = useState({
        2000: true,
        12000: true
    })

    const [attack, setAttack] = useState(0)

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
            
            <Character items={items} action="stand1" />
            <br />
            Total Attack: {attack}
            <br />
            
            {inventory.items.map((item) => (
                <Item key={item.id} onClick={() => equip(item)} id={item.id} />
            ))}
            
        </Container>
    )
    
}

export default Storage