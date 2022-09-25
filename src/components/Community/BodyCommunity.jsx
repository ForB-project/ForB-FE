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
        <ContentCommunity
          title={`제 코드 좀 봐주세요`}
          author={"응애개발자"}
          stack={"backend"}
        />
        <ContentCommunity
          title={`도대체 이게 뭐죠`}
          author={"이거모에용"}
          stack={"backend"}
        />
        <ContentCommunity
          title={`React 이거 맞아요? 진짜요?`}
          author={"개발자(진)"}
          stack={"frontend"}
        />
        <ContentCommunity
          title={`서버 배포하는데 이거 맞습니까`}
          author={"백조아"}
          stack={"backend"}
        />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />
        <div> 1 2 3 4 5 6 </div>
      </BodyStyled>
    </>
  );
};

export default BodyCommunity;

const BodyStyled = styled.div`
  border: 1px dashed black;

  border-radius: 50px;
  background-color: black;
  opacity: 0.95;
  transition: 0.5s;

  color: white;
  font-size: 20px;
  font-family: "neodgm";

  margin: auto;
  width: 70vw;
  height: 70vh;
  padding-top: 1vh;

  text-align: center;
`;
