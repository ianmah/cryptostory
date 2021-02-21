import React, { useState } from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'
import Character from './Character'

// https://maplestory.io/api/GMS/220/mob/2600225/render/stand/animated?resize=2

const StyledImg = styled.img`
  height: 50%;
  max-height: 400px;
  padding: 1em;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 35px;
  image-rendering: pixelated;
`;

const Characters = styled.div`
  position: absolute;
  bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`

const StyledCharacter = styled(Character)`
  max-height: 100px;
  margin: 0 0px;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  text-align: center;
  background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cc5ebe3-5cea-4437-93be-61141f8a8916/d6xj99n-5e35ddeb-6868-4e9e-a918-9523102622ff.png/v1/fill/w_1024,h_560,strp/maplestory_backgrounds___enchanted_forest_by_akarituturu_d6xj99n-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NjAiLCJwYXRoIjoiXC9mXC8zY2M1ZWJlMy01Y2VhLTQ0MzctOTNiZS02MTE0MWY4YTg5MTZcL2Q2eGo5OW4tNWUzNWRkZWItNjg2OC00ZTllLWE5MTgtOTUyMzEwMjYyMmZmLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.q5zSjXdV0usP4bTLNAspuirQqj1YZNmu1iz05f3MoGc);
  background-position: bottom;
`;

const Monster = ({id}) => {
    
    return (
        <StyledImg src={`https://maplestory.io/api/gms/220/mob/${id}/render/stand`} alt={`monster ${id}` } />
    )
    
}

const MonsterWrapper = () => {

    const [monster, setMonster] = useState({});
    const [users, setUsers] = useState([]);
    const len = Object.keys(users).length

    window.ws.onmessage = (message) => {
        if (message.data !== 'Successful connection!') {
          const data = JSON.parse(message.data)
          if (data.attack) {
              setMonster(data)
          }
          if (data.updateUserList) {
            setUsers(Object.values(data.users))
          }
        }
    }

    return (
      <Container>
          <ProgressBar percentage={(monster.hp / 10000) * 100} />
          <Monster id={monster.id} />
          <Characters>
          {
            users.map((user, i) => {
              const flipped = i < len / 2
              return <StyledCharacter key={i} items={user} action="stabO2" flipped={flipped} />
            })
          }
          </Characters>
      </Container>
    );
}


export default MonsterWrapper