import React from "react";
import styled from "styled-components";
const RoadmapStack = props => {
  return (
    <StackStyled
      onClick={() => {
        props.setChoseStack(props.data.id);
      }}
    >
      {props.data.title}
    </StackStyled>
  );
};

export default RoadmapStack;

const StackStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8%;
  height: 30%;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 1.5rem;
  transition: all 0.2s ease;
  &:hover {
    background-color: black;
    border: 1px solid black;

    cursor: pointer;
  }
`;
