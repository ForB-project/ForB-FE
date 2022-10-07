import React from "react";
import styled from "styled-components";
import { ContentCommunity } from "./index";
import { useState } from "react";
import ContentModal from "../Modal/ContentModal";

const BodyCommunity = ({ title, author, stack }) => {
  //게시글 클릭 > 모달
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <BodyStyled>
        <div onClick={showModal}>
          <ContentCommunity
            title={`이거모에여`}
            author={"코린이"}
            stack={"badge"}
          />
          {modalOpen && <ContentModal setModalOpen={setModalOpen} />}
        </div>
        {/* <ContentCommunity
          title={`제 코드 좀 봐주세요`}
          author={"응애개발자"}
          stack={"badge"}
        />
        <ContentCommunity
          title={`도대체 이게 뭐죠`}
          author={"이거모에용"}
          stack={"badge"}
        />
        <ContentCommunity
          title={`React 이거 맞아요? 진짜요?`}
          author={"개발자(진)"}
          stack={"badge"}
        />
        <ContentCommunity
          title={`서버 배포하는데 이거 맞습니까`}
          author={"백조아"}
          stack={"badge"}
        />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity /> */}

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
  font-size: 1.5rem;
  font-family: "neodgm";

  margin: auto;
  width: 70vw;
  height: 70vh;
  padding-top: 1vh;

  text-align: center;
`;
