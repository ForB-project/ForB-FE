import React from "react";
import styled from "styled-components";
interface Iprops {
  data: { id: number; title: string; category: string };
  setChoseCategory: (x: { id: number; title: string }) => void;
}
const RoadmapCategory = (props: Iprops) => {
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
  border: 1px solid white;
  border-radius: 10px;
  transition: all 0.1s ease;
  &:hover {
    background-color: black;
    border: 1px solid black;
    cursor: pointer;
  }
`;
