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

    const equip = (item) => {
        const newItems = {...items}
        newItems[item] = !newItems[item]
        setItems(newItems)
    }

    
    return (
        <Container>
            Inventory
            <br/>
            
            <Character items={items} action="stand1" />
            {inventory.items.map((item) => (
                <Item key={item} onClick={() => equip(item)} id={item} />
            ))}
        </Container>
    )
    
}

export default Storage