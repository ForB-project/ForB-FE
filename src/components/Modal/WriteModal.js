import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const WriteModal = ({ setModalOpen }) => {
  // modal 닫기 설정
  const closeModal = () => {
    setModalOpen(false);
  };

  // 제목 입력 받기
  const [title, setTitle] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
    console.log("title =", title);
  };

  // 내용 입력 받기
  const [content, setContent] = useState("");
  const contentHandler = (e) => {
    setContent(e.target.value);
    console.log("content =", content);
  };

  // post 요청
  const dispatch = useDispatch();
  const writeClickHandler = () => {
    dispatch();
  };

  return (
    <WriteModalStyled>
      <button className="closebutton" onClick={closeModal}>
        <p className="close">X</p>
      </button>
      <div>
        <TitleBoxStyled>
          <TitleInput
            onChange={titleHandler}
            placeholder="제목을 작성해주세요"
          />
          <label></label>
        </TitleBoxStyled>
        <ContentBoxStyled>
          <ContentInput
            onChange={contentHandler}
            placeholder="내용을 작성해주세요"
          />
        </ContentBoxStyled>
        <WriteButtonBoxStyled onClick={writeClickHandler}>
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
const ContentInput = styled.textarea`
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
  width: 9vw;
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
