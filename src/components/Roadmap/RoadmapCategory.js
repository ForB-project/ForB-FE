import React from "react";
import styled from "styled-components";
import { RoadmapAPI } from "../../shared/api";
import { useQuery } from "react-query";
const RoadmapCategory = props => {
  return (
    <StackStyled
      onClick={() => {
        props.setChoseCategory({
          id: props.data.id,
          title: props.data.title.toLowerCase(),
        });
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
