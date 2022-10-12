import React from "react";
import styled from "styled-components";
import { ContentCommunity } from "./index";

const BodyCommunity = ({ title, author, stack }) => {
  return (
    <>
      <BodyStyled>
        <ContentCommunity
          title={`이거모에여`}
          author={"코린이"}
          stack={"frontend"}
        />
        <ContentCommunity />
        <div> 1 2 3 4 5 </div>
      </BodyStyled>
    </>
  );
};

export default BodyCommunity;

const BodyStyled = styled.div`
  /* border: 1px dashed black; */

  border-radius: 50px;
  background-color: black;
  opacity: 0.95;
  transition: 0.5s;

  color: white;
  font-size: 2.5rem;
  font-family: "neodgm";

  margin: auto;
  width: 70vw;
  height: 70vh;
  padding-top: 1vh;

  text-align: center;
`;
