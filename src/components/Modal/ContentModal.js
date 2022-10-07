import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

// api배포주소 숨김/import
import { api } from "../../shared/api";

const ContentModal = ({ setModalOpen }) => {
  // modal 닫기 설정
  const closeModal = () => {
    setModalOpen(false);
  };

  // 게시글 가져오기
  const _getContents = async () => {
    console.log("_getContents");
    const res = await api.get(`/api/post?page=1&size=11`);
    console.log("res", res);
    return res;
  };
  useEffect(() => {
    _getContents();
  }, []);

  // get요청한 data 간직하기..
  // usestate? useQuery?
  const [pageNumber, setPateNumber] = useState();

  const contentsList = useQuery(
    //배열 [키값, 데이터]
    ["contentsList", pageNumber],
    //함수 (get할때 page number에 맞추서)
    () => _getContents(pageNumber)
    //옵션(필요할 때)
  );

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
