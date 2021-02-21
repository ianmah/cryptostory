import React from 'react'
import Item from "./Item";

const Storage = ({inventory}) => {
    
    return (
        <>
            
            {inventory.items.map((item) => (
                <Item id={item} />
            ))}
        </>
    )
    
}

export default Storage