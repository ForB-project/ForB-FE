import React from "react";
import styled from "styled-components";

const WriteModal = () => {
  const closeModal = ({ setModalOpen }) => {
    setModalOpen(false);
  };
  return (
    <WriteModalStyled>
      <button onClick={{ closeModal }}>
        <span className="close">X</span>
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

  border: 4px dashed black;
  border-radius: 20px;
  background-color: #10141b;

  width: 40vw;
  height: 40vh;
  padding-top: 1vh;

  color: white;
  font-size: 2rem;

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
  }
`;
