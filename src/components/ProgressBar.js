import React from "react";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  margin: auto;
  position: relative;
  height: 20px;
  width: 350px;
  border-radius: 50px;
  border: 1px solid #333;
`;

const StyledFilter = styled.div`
  background: #1da598;
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
`;

const Filter = (props) => {
  return <StyledFilter style={{ width: `${props.percentage}%` }} />;
};

const ProgressBar = (props) => {
  return (
    <StyledProgressBar>
      <Filter percentage={props.percentage} />
    </StyledProgressBar>
  );
};

export default ProgressBar;
