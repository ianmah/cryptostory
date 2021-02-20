import React from 'react'

// Request URL: https://maplestory.io/api/GMS/220/item/1102144/icon

const Item = ({id}) => {
    
    return (
        <img src={`https://maplestory.io/api/GMS/220/item/${id}/icon`} alt='Item'/>
    )
    
}

export default Item