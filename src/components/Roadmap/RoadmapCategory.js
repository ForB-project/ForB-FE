import React from "react";
import styled from "styled-components";
const RoadmapCategory = props => {
  return (
    <StackStyled
      onClick={() => {
        props.setChoseCategory(props.data.contentid);
      }}
    >
      {props.data.category}
    </StackStyled>
  );
};

export default RoadmapCategory;

const StackStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 5%;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 10px;
`;
