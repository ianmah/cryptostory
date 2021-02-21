import React, { useState, useEffect } from 'react';
import { getCharacter } from '../util/maplestoryio';

const Character = ({items, action, flipped, ...props}) => {
    const [characterImg, setCharacterImg] = useState();

  useEffect(() => {
    const get = async () => {
      const blob = await getCharacter(items, action, flipped);
      setCharacterImg(blob);
    };
    get();
  }, [items, action, flipped]);
    return (
        <img src={characterImg} alt="Character" {...props} />
    )
}


export default Character;
