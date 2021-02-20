import React, { useState } from 'react'
import ProgressBar from "./ProgressBar";

// https://maplestory.io/api/GMS/220/mob/2600225/render/stand/animated?resize=2

const Monster = ({id}) => {
    
    return (
        <img src={`https://maplestory.io/api/GMS/220/mob/${id}/render/stand/animated?resize=2`} alt={`monster ${id}`} />
    )
    
}

const MonsterWrapper = () => {

    const [monster, setMonster] = useState({});

    window.ws.onmessage = (message) => {
        if (message.data !== 'Successful connection!') {
          const data = JSON.parse(message.data)
          if (data.attack) {
              setMonster(data)
          }
        }
    }

    return (
        <>
            <ProgressBar percentage={monster.hp / 10000 * 100} />
            <Monster id={monster.id} />
        </>
    )
}


export default MonsterWrapper