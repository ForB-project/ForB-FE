import React from "react";
import styled from "styled-components";

//close동작 props넘기는 방법 물어볼 것
const WriteModal = (setModalOpen) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <WriteModalStyled>
      <button className="closebutton" onClick={closeModal}>
        <p className="close">X</p>
      </button>
      <div>WriteModal</div>
    </WriteModalStyled>
  );
};

export default WriteModal;

const WriteModalStyled = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;

  border: 4px solid black;
  border-radius: 20px;
  background-color: #888888;

  width: 40vw;
  height: 40vh;
  padding-top: 1vh;

  color: white;
  font-size: 2rem;

  .closebutton {
    border: none;
    background: none;
  }
  .close {
    position: absolute;
    top: 1px;
    right: 20px;
    color: white;
    font-size: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
