import React from "react";
import styled from "styled-components";

const ContentModal = ({ setModalOpen }) => {
  // modal 닫기 설정
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ContentModalStyled>
      <button className="closebutton" onClick={closeModal}>
        <p className="close">X</p>
      </button>
      <TitleBoxStyled>
        <TitleInput placeholder="제목" />
      </TitleBoxStyled>
      <ContentBoxStyled>
        <ContentInput placeholder="내용" />
      </ContentBoxStyled>{" "}
    </ContentModalStyled>
  );
};

export default ContentModal;

const ContentModalStyled = styled.div`
  position: absolute;
  top: 8.5%;
  left: 15%;
  font-family: "neodgm";

  /* border: 4px solid black; */
  border-radius: 20px;
  background-color: black;

  width: 70vw;
  height: 70vh;
  padding-top: 1vh;

  color: white;
  font-size: 1rem;

  .closebutton {
    border: none;
    background: none;
  }
  .close {
    position: absolute;
    top: 1px;
    right: 30px;
    color: white;
    font-size: 1.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

const TitleBoxStyled = styled.div``;
const TitleInput = styled.input`
  /* border: 4px solid black; */
  border: none;
  border-radius: 10px;

  margin-top: 1vh;
  padding: 1vw;
  width: 40vw;

  font-size: 1rem;
  font-family: "neodgm";
`;
const ContentInput = styled.textarea`
  /* border: 4px solid black; */
  border: none;
  border-radius: 20px;

  margin-top: 3vh;
  padding: 1vw;

  width: 60vw;
  height: 45vh;

  font-size: 1.5rem;
  font-family: "neodgm";
`;
const ContentBoxStyled = styled.div``;
