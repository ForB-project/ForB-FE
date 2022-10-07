import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { ContentCommunity } from "./index";
import { api } from "../../shared/api";
import { useNavigate } from "react-router-dom";

const BodyCommunity = ({ title, nickname, stack }) => {
  // pagination 상단에 선언해두기
  const [pageNumber, setPageNumber] = useState(1);

  // 게시글 가져오기 (useQuery로 실행)
  const _getContents = async (pageNumber) => {
    const res = await api.get(`/api/post?page=${pageNumber}&size=11`);
    return res;
  };
  // useQuery
  const contentsList = useQuery(["communityList", pageNumber], () =>
    _getContents(pageNumber)
  );
  const CurrentContentsList = contentsList.data?.data.data;
  // console.log("contentsList =", contentsList.data?.data.data);

  // 배열의 키값 >

  return (
    <>
      <BodyStyled>
        <div onClick={useNavigate("/community")}>
          <ContentCommunity title={title} author={nickname} stack={"badge"} />
        </div>
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
