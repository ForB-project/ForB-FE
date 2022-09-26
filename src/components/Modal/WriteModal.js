import React from "react";
import styled from "styled-components";

//close동작 props넘기는 방법 물어볼 것
const WriteModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <WriteModalStyled>
      <button className="closebutton" onClick={closeModal}>
        <p className="close">X</p>
      </button>
      <div>
        <TitleBoxStyled>
          <TitleInput placeholder="제목" />
          <label></label>
        </TitleBoxStyled>
        <ContentBoxStyled>
          <ContentInput placeholder="내용" />
        </ContentBoxStyled>
        <WriteButtonBoxStyled>
          <WriteButton>글쓰기</WriteButton>
        </WriteButtonBoxStyled>
      </div>
    </WriteModalStyled>
  );
};

export default WriteModal;

const WriteModalStyled = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  font-family: "neodgm";

  /* border: 4px solid black; */
  border-radius: 20px;
  background-color: #888888;

  width: 60vw;
  height: 50vh;
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
    color: black;
    font-size: 2rem;
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
  width: 30vw;

  font-size: 2rem;
  font-family: "neodgm";
`;
const ContentInput = styled.input`
  /* border: 4px solid black; */
  border: none;
  border-radius: 20px;

  margin-top: 1vh;
  padding: 1vw;

  width: 50vw;
  height: 30vh;

  font-size: 2rem;
  font-family: "neodgm";
`;
const ContentBoxStyled = styled.div``;

const WriteButtonBoxStyled = styled.div`
  border-radius: 10px;
  /* border: 4px solid black; */
  border: none;
  background-color: #10141b;
  /* float: right; */

  margin: 1vw;
  display: inline-block;
  width: 7vw;
`;
const WriteButton = styled.button`
  border: none;

  color: gray;
  font-size: 1.5rem;
  font-family: "neodgm";

  width: 100%;
  height: 5vh;
  background: none;

  cursor: pointer;
  &:hover {
    font-size: 1.8rem;
    color: white;
  }
`;
