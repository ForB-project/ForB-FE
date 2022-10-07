import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { api } from "../../shared/api";

const WriteModal = ({ setModalOpen }) => {
  // modal close
  const closeModal = () => {
    setModalOpen(false);
  };

  // 제목 input
  const [title, setTitle] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  // 내용 input
  const [content, setContent] = useState("");
  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  // 제목+내용 input
  const postContents = {
    title: title,
    content: content,
    // id:id,
    // nickname:nickname,
    // createdAt:
  };

  // 버튼클릭 > post 요청
  const writeClickHandler = () => {
    const _postContents = async (data) => {
      const res = await api.post(`/api/auth/post`);
    };
    console.log("post요청확인");
    return _postContents();
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
          <WriteButton onClick={closeModal}>작성하기</WriteButton>
        </WriteButtonBoxStyled>
      </div>
    </WriteModalStyled>
  );
};

export default WriteModal;

const WriteModalStyled = styled.div`
  position: absolute;
  top: 8.5%;
  left: 15%;
  font-family: "neodgm";

  /* border: 4px solid black; */
  border-radius: 50px;
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

  font-size: 1.5rem;
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

const WriteButtonBoxStyled = styled.div`
  /* border: 4px solid black; */

  border-radius: 10px;
  border: none;
  background-color: #10141b;

  margin-top: 3vh;
  display: inline-block;
  width: 10vw;
`;
const WriteButton = styled.button`
  border: none;

  color: #909090;
  font-size: 1.5rem;
  font-family: "neodgm";

  width: 100%;
  height: 5vh;
  background: none;

  cursor: pointer;
  &:hover {
    font-size: 1.6rem;
    color: white;
  }
`;
