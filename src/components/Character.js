import React, { useState, useEffect } from 'react';
import { getCharacter } from '../util/maplestoryio';
import styled from 'styled-components';

const StyleImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 50px;
  position: absolute;
`;

const Character = ({ items, action }) => {
  const [characterImg, setCharacterImg] = useState();

  useEffect(() => {
    const get = async () => {
      const blob = await getCharacter(items, action);
      setCharacterImg(blob);
    };
    get();
  }, [items, action]);

  return <StyleImage src={characterImg} alt="Character" />;
};

export default Character;
