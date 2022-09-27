import React, { useState } from "react";
import styled from "styled-components";
import WriteModal from "../Modal/WriteModal";

const LowerCommunity = () => {
  // 글쓰기 modal창
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <LowerStyled>
        <CenterBoxStyled>
          <WriteButton onClick={showModal}>글쓰기</WriteButton>
          {modalOpen && <WriteModal setModalOpen={setModalOpen} />}
        </CenterBoxStyled>
      </LowerStyled>
    </>
  );
};

export default LowerCommunity;

const LowerStyled = styled.div`
  text-align: center;

  margin: 1vh;
  padding-top: 2vh;
`;
const CenterBoxStyled = styled.div`
  border-radius: 10px;
  border: 8px dashed black;
  background-color: #10141b;
  opacity: 0.95;

  margin: 1vw;
  display: inline-block;
  width: 20vw;

  font-family: "neodgm";
`;
const WriteButton = styled.button`
  border: none;

  color: gray;
  font-size: 2rem;
  font-family: "neodgm";

  width: 100%;
  height: 5vh;
  background: none;

  cursor: pointer;
  &:hover {
    font-size: 2.5rem;
    color: white;
    opacity: 1;
  }
`;
