import React, { useState, useEffect } from 'react'
import { getCharacter } from '../util/maplestoryio'

const Character = ({character, action}) => {
    const [characterImg, setCharacterImg] = useState();

    useEffect(() => {
        const get = async () => {
            const blob = await getCharacter(character.items, action)
            setCharacterImg(blob)
        }
        get()
    }, [])
    

    return (
        <img src={characterImg} alt='Character'/>
    )
}

export default Character