import React from "react";
import styled from "styled-components";
import Line from "./Line";

const Body = ({ title, author, date }) => {
  return (
    <>
      <BodyStyled>
        <Line title={`제목1`} author={"작성자1"} date={""} />
        <Line title={`제목2`} author={"작성자2"} date={""} />
        <Line title={`제목3`} author={"작성자3"} date={""} />
        <Line title={`제목4`} author={"작성자4"} date={""} />
        <Line title={`제목5`} author={"작성자5"} date={""} />
        <Line />
        <Line />
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
  /* border: 1px dashed green; */

  color: white;

  width: 80vw;
  height: 46vh;

  margin-top: 2vw;
  margin-left: 2vw;
  margin-right: 2vw;

  text-align: center;
`;
