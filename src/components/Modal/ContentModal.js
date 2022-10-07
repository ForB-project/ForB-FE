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
      <div>Detail</div>
      <div>내용</div>
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
  background-color: #888888;

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
    color: black;
    font-size: 1.5rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
