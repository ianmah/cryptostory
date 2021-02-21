import React, { useState, useEffect } from 'react'
import { getCharacter } from '../util/maplestoryio'

const Character = ({items, action}) => {
    console.log(items)
    const [characterImg, setCharacterImg] = useState();

    useEffect(() => {
        const get = async () => {
            const blob = await getCharacter(items, action)
            setCharacterImg(blob)
        }
        get()
    }, [items, action])
    

    return (
        <img src={characterImg} alt='Character'/>
    )
}

export default Character