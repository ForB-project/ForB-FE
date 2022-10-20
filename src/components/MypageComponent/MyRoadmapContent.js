import React, { forwardRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Logo, mainFirst } from "../../static";
import { LikeAPI, ContentAPI } from "../../shared/api";
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import { FaHeart, FaRegHeart, FaTrashAlt } from "react-icons/fa";
import RoadmapContent from "../Roadmap/RoadmapContent";
import { useInView } from "react-intersection-observer";

const MyRoadmapContent = props => {
  const [ref, inView] = useInView();

  //Content 불러오는 부분
  const getContent = async (Id, pageParam) => {
    const res = await ContentAPI.getMyPage(Id, pageParam);
    console.log(res);
    return {
      result: res.data.data,
      nextPage: pageParam + 1,
      isLast: res.data.data.length === 7 ? false : true,
    };
  };

  const mypageInfiniteQuery = useInfiniteQuery(
    ["contentList", props.querykey],
    ({ pageParam = 1 }) => getContent(props.querykey, pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        //hasNextPage 대용

        if (!lastPage.isLast) {
          return lastPage.nextPage;
        } else {
          return undefined;
        }
      },
    }
  );
  useEffect(() => {
    if (inView) {
      mypageInfiniteQuery.fetchNextPage();
    }
  }, [inView]);
  return (
    <React.Fragment>
      {mypageInfiniteQuery.data?.pages.map((x, idx) => {
        return (
          <React.Fragment key={idx}>
            {x?.result.map((y, keys) => {
              if (keys % 7 === 6) {
                return (
                  <RoadmapContent
                    ref={ref}
                    key={y.id}
                    querykey={props.querykey}
                    data={y}
                  />
                );
              } else {
                return (
                  <RoadmapContent
                    key={y.id}
                    querykey={props.querykey}
                    data={y}
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

export default MyRoadmapContent;
