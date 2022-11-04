import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { ContentCommunity } from "./index";
import { CommunityContentAPI } from "../../shared/api";
import { useQuery, useQueryClient } from "react-query";
import * as S from "./styeld";
import Pagenation from "./Pagenation";

const BodyCommunity = () => {
  const [pageParam, setPageParam] = useState(1);
  const [activeSearch, setActiveSearch] = useState(false);
  // 데이터 가져오기
  const getAllCommunity = async pageParam => {
    const res = await CommunityContentAPI.getAllContent(pageParam);
    return res.data.data;
  };
  const queryClient = useQueryClient();
  const CommunityQuery = useQuery(
    ["CommnunityContent", pageParam],
    () => getAllCommunity(pageParam),
    {
      keepPreviousData: true,
      refetchInterval: 1000,
    }
  );

  // 데이터 미리가지고 오기
  useEffect(() => {
    if (pageParam < CommunityQuery.data?.postCount / 6 + 1) {
      const nextPage = pageParam + 1;
      queryClient.prefetchQuery(["CommnunityContent", nextPage], () =>
        getAllCommunity(nextPage)
      );
    }
  }, [pageParam, queryClient]);
  //검색해서 데이터 가져오기

  const SearchRef = useRef(null);
  const keyword = SearchRef.current?.value;
  const searchData = async (keyword, pageParam) => {
    if (keyword === "") {
      return null;
    } else {
      const res = await CommunityContentAPI.searchContent(keyword, pageParam);
      return res.data.data;
    }
  };
  const SearchQuery = useQuery(
    ["SearchContent", pageParam, keyword],
    () => searchData(keyword, pageParam),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const refetchQuery = () => {
    SearchQuery.refetch();
  };
  useEffect(() => {
    refetchQuery();
  }, [keyword]);
  const postCount = activeSearch
    ? SearchQuery.data?.postSearchCount
    : CommunityQuery.data?.postCount;

  return (
    <>
      <SearchBox activeSearch={activeSearch}>
        {activeSearch ? (
          <div className="searchcontainer">
            <input ref={SearchRef} placeholder="단어를 입력하세요" />
            <div
              onClick={() => {
                refetchQuery();
                setPageParam(1);
              }}
            >
              검색
            </div>
            <div
              onClick={() => {
                setActiveSearch(!activeSearch);
                setPageParam(1);
              }}
            >
              닫기
            </div>
          </div>
        ) : (
          <div
            className="openSearch"
            onClick={() => {
              setActiveSearch(!activeSearch);
            }}
          >
            검색하기
          </div>
        )}
      </SearchBox>
      <S.Body>
        {activeSearch
          ? SearchQuery.data?.postSearchList.map(x => (
              <ContentCommunity key={x.id} data={x} querykey={pageParam} />
            ))
          : CommunityQuery.data?.postList?.map(x => (
              <ContentCommunity key={x.id} data={x} querykey={pageParam} />
            ))}
      </S.Body>
      <S.Lower>
        <Pagenation
          postCount={postCount}
          pageParam={pageParam}
          setPageParam={setPageParam}
        />
      </S.Lower>
    </>
  );
};

export default BodyCommunity;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.activeSearch
      ? css`
          width: 60vw;
        `
      : css`
          width: 10vw;
        `}
  height: 6vh;
  background-color: black;
  margin: 4vh auto;
  border-radius: 30px;
  transition: 0.3s;
  .searchcontainer {
    display: grid;
    grid-template-columns: 70% 15% 15%;
    width: 90%;
    height: 80%;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      
      &:hover {
        cursor: pointer;
        font-size: 3vmin;
      }
    }
  }
  .openSearch{
    font-size: 2vmin;
    color: gray;
    &:hover {
        cursor: pointer;
        font-size: 2.2vmin;
        color: white;
  }
`;
