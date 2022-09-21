import React from "react";
import styled from "styled-components";
import Line from "./Line";

const Body = ({ title, author, stack }) => {
  return (
    <>
      <BodyStyled>
        <Line title={`제목1`} author={"작성자1"} stack={"frontend"} />
        <Line title={`제목2`} author={"작성자2"} stack={"backend"} />
        <Line title={`제목3`} author={"작성자3"} stack={"backend"} />
        <Line title={`제목4`} author={"작성자4"} stack={"frontend"} />
        <Line title={`제목5`} author={"작성자5"} stack={"backend"} />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <div> 1 2 3 4 5 6 </div>
      </BodyStyled>
    </>
  );
};

export default Body;

const BodyStyled = styled.div`
  border: 1px dashed black;

  border-radius: 50px;
  background-color: black;
  transition: 0.5s;

  color: white;
  font-size: 20px;
  font-family: "neodgm";

  margin: auto;
  width: 60vw;
  height: 50vh;
  padding-top: 1vh;

  text-align: center;
`;
