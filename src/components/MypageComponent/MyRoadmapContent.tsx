import React, { useEffect } from "react";
import styled from "styled-components";

import { ContentAPI } from "../../shared/api";
import { useInfiniteQuery } from "react-query";

import RoadmapContent from "../Roadmap/RoadmapContent";
import { useInView } from "react-intersection-observer";
interface Imyroadmap {
  querykey: number;
}
interface IData {
  thumbnail: string;
  link: string;
  title: string;
  desc: string;
  id: number;
  heartCnt: number;
  heartCheck: boolean;
}
const MyRoadmapContent = (props: Imyroadmap) => {
  const [ref, inView] = useInView();

  //Content 불러오는 부분
  const getContent = async (Id: number, pageParam: number) => {
    const res = await ContentAPI.getMyPage(Id, pageParam);

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
      <RecommendStyled>
        로드맵 자료를 올리거나 좋아요를 눌러 마이페이지를 채워 보세요!
      </RecommendStyled>

      {mypageInfiniteQuery.data?.pages.map((x, idx) => {
        return (
          <React.Fragment key={idx}>
            {x?.result.map((y: IData, keys: number) => {
              if (keys % 7 === 6) {
                return (
                  <RoadmapContent
                    ref={ref}
                    key={y.id}
                    mypagekey={props.querykey}
                    data={y}
                  />
                );
              } else {
                return (
                  <RoadmapContent
                    key={y.id}
                    mypagekey={props.querykey}
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

const RecommendStyled = styled.div`
  font-size: 2.5vmin;
  filter: drop-shadow(-2px 0 0 black) drop-shadow(2px 0 0 black)
    drop-shadow(0 -2px 0 black) drop-shadow(0 2px 0 black);
`;
