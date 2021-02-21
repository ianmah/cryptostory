import React, { useState } from 'react'
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
        <br />
        <Preview>
          <Character items={items} action="stand1" />
        </Preview>
        <br />
        {inventory.items.map((item) => (
          <Item key={item} onClick={() => equip(item)} id={item} />
        ))}
      </Container>
    );
    
}

export default Storage