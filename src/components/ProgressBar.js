import React from 'react';
import styled from 'styled-components';

const StyledProgressBar = styled.div`
  // margin: auto;
  position: relative;
  height: 20px;
  width: 99.7%;
  border-radius: 3px;
  border: 1px solid #333;
  background-color: #424242;
`;

const StyledFilter = styled.div`
  background: #ff3333;
  height: 100%;
  border-radius: inherit;
  transition: width 0.1s ease-in;
`;

const Percent = styled.p`
  z-index: 1;
  color: white;
  position: absolute;
  margin:auto;
  left: 0;
  right: 0;
  text-align: center;
`;

const Filter = (props) => {
  return <StyledFilter style={{ width: `${props.percentage}%` }} />;
};

const ProgressBar = (props) => {
  return (
    <StyledProgressBar>
      <Percent>{props.percentage.toFixed(2)}%</Percent>
      <Filter percentage={props.percentage} />
    </StyledProgressBar>
  );
};

export default ProgressBar;
