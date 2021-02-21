import React, { useState } from 'react'
import styled from 'styled-components'
import Item from './Item'
import Character from './Character'

const Container = styled.div`
    margin: 1em 0;
`


const Storage = ({inventory}) => {

    const [items, setItems] = useState([
      {
        itemId: 2000,
        version: "220",
      },
      {
        itemId: 12000,
        version: "220",
      },
    ])

    const equip = (item) => {
        setItems([
            ...items,
            {
                itemId: item,
                version: "220"
            }
        ])
    }

    
    return (
        <Container>
            Inventory
            <br/>
            
            <Character items={items} action="stand1" />
            {inventory.items.map((item) => (
                <Item onClick={() => equip(item)} id={item} />
            ))}
        </Container>
    )
    
}

export default Storage