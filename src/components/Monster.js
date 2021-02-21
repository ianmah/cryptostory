import React, { useState } from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'

// https://maplestory.io/api/GMS/220/mob/2600225/render/stand/animated?resize=2

const StyledImg = styled.img`
    max-height: 400px;
    padding: 1em;
`

const Container = styled.div`
    width: 100%;
    height: 450px;
    text-align: center;
`


const Monster = ({id}) => {
    
    return (
        <StyledImg src={`https://maplestory.io/api/GMS/220/mob/${id}/render/stand/animated?resize=2`} alt={`monster ${id}`} />
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
        <Container>
            <ProgressBar percentage={monster.hp / 10000 * 100} />
            <Monster id={monster.id} />
        </Container>
    )
}


export default MonsterWrapper