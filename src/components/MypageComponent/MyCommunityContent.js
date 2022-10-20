import React, { forwardRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Logo, mainFirst } from "../../static";
import { LikeAPI, ContentAPI, CommunityContentAPI } from "../../shared/api";
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import { FaHeart, FaRegHeart, FaTrashAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import CommunityContentList from "./CommunityContentList";
const MyCommunityContent = props => {
  const [ref, inView] = useInView();
  // 나의 게시판 글 가져오기
  const getmyCommunity = async pageParam => {
    const res = await CommunityContentAPI.getmyCommunity(pageParam);
    return {
      result: res.data.data,
      nextPage: pageParam + 1,
      isLast: res.data.data.length === 7 ? false : true,
    };
  };

  const myCommunityQuery = useInfiniteQuery(
    ["CommunityList"],
    ({ pageParam = 1 }) => getmyCommunity(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        //hasNextPage 대용
        // console.log(lastPage);
        if (!lastPage.isLast) {
          return lastPage.nextPage;
        } else {
          return undefined;
        }
      },
    }
  );

  //좋아요누른 게시글 가져오기
  const getLikemyCommunity = async pageParam => {
    const res = await CommunityContentAPI.getLikeCommunity(pageParam);
    return {
      result: res.data.data,
      nextPage: pageParam + 1,
      isLast: res.data.data.length === 7 ? false : true,
    };
  };

  const myLikeCommunityQuery = useInfiniteQuery(
    ["LikeCommunityList"],
    ({ pageParam = 1 }) => getLikemyCommunity(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        //hasNextPage 대용
        // console.log(lastPage);
        if (!lastPage.isLast) {
          return lastPage.nextPage;
        } else {
          return undefined;
        }
      },
      refetchInterval: 200,
    }
  );

  useEffect(() => {
    if (inView) {
      myCommunityQuery.fetchNextPage();
    } else if (myLikeCommunityQuery) {
      myLikeCommunityQuery.fetchNextPage();
    }
  }, [inView]);
  return (
    <React.Fragment>
      {(props.likeContent
        ? myLikeCommunityQuery
        : myCommunityQuery
      ).data?.pages.map((x, idx) => {
        return (
          <React.Fragment key={idx}>
            {x?.result.map((y, keys) => {
              if (keys % 7 === 6) {
                return (
                  <CommunityContentList
                    ref={ref}
                    key={y.id}
                    navigate={y.id}
                    data={y}
                    likeContent={props.likeContent}
                  />
                );
              } else {
                return (
                  <CommunityContentList
                    key={y.id}
                    navigate={y.id}
                    data={y}
                    likeContent={props.likeContent}
                  />
                );
              }
            })}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default MyCommunityContent;
