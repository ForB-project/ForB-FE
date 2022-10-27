import React, { useEffect, useState } from "react";
import { useQuery, useInfiniteQuery, useQueryClient } from "react-query";
import styled, { keyframes } from "styled-components";
import {
  RoadmapStack,
  RoadmapCategory,
  RoadmapContent,
  Header,
  ModalWide,
  AddContentModal,
  RoadmapGuide,
  RoadmapContentHeader,
  SearchModal,
} from "../components";
import { RoadmapAPI } from "../shared/api";
import { GreateHall } from "../static";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { GrSearchAdvanced } from "react-icons/gr";
import { getAccessToken } from "../shared/storage";
import { QuizResultAPI } from "../shared/api";
import { getQuizResult } from "../shared/storage";

  
const RoadMap = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const [closeModal, setCloseModal] = useState(false);
  const [closeSearch, setCloseSearch] = useState(false);
  //Stack 불러오는 부분
  const getStack = async () => {
    return await RoadmapAPI.getStack();
  };
  const Stacklist = useQuery("Stacklist", getStack, { keepPreviousData: true });
  const FrontStack = Stacklist.data?.data.data[0]["frontList"];
  const BackStack = Stacklist.data?.data.data[0]["backList"];
  const [CurrentStack, setCurrentStack] = useState(false);

  //StackId 이용해서 category불러오는 부분
  const [choseStack, setChoseStack] = useState(1);
  const getCategory = async (StackId) => {
    return await RoadmapAPI.getCategory(StackId);
  };
  const categoryList = useQuery(
    ["categoryList", choseStack],
    () => getCategory(choseStack),
    { keepPreviousData: true }
  );
  const CurrentCategory = categoryList.data?.data.data;

  //Content 불러오는 부분
  const [getSort, setSort] = useState("heartCnt");
  const [choseCategory, setChoseCategory] = useState({
    id: 1,
    title: "html",
  });

  const getContent = async (data, pageParam, getSort) => {
    const res = await RoadmapAPI.getContent(data, pageParam, getSort);

    return {
      result: res.data.data,
      nextPage: pageParam + 1,
      isLast: res.data.data[0].contentList.length === 7 ? false : true,
    };
  };

  const infiniteQuery = useInfiniteQuery(
    ["contentList", choseCategory, getSort],
    ({ pageParam = 1 }) => getContent(choseCategory, pageParam, getSort),
    {
      getNextPageParam: (lastPage, pages) => {
        //hasNextPage 대용

        if (!lastPage.isLast) {
          return lastPage.nextPage;
        } else {
          return undefined;
        }
      },
      refetchInterval: 1000,
    }
  );
  const contentHeader = infiniteQuery?.data?.pages[0]?.result[0];

  //프론트,백 엔드 결과에 따른 로드맵 시작 설정을 위한 React-Query
  const __getResult = async () => {
    const res = await QuizResultAPI.repostResult();
    return res.data?.data[0];
  };
  const data = getQuizResult();
  const resultQuery = useQuery("QuizResult", () => __getResult(data));
  const resultData = resultQuery?.data;

  //로그인 안돼있으면 홈페이지로
  useEffect(() => {
    if (!getAccessToken()) {
      navigate("/");
    }
    //테스트 결과에 따른 로드맵 FE,BE 시작
    queryClient.prefetchQuery(["CommnunityContent"], () =>
    __getResult()
      );
    setCurrentStack(
      resultData?.stackType === "S" || resultData?.stackType === "R"
        ? !CurrentStack
        : null
    );
    console.log(resultData,'resultData in useEffect');
  }, [getAccessToken()]);

  // inView일때 다음 페이지 가져오기
  useEffect(() => {
    if (inView) {
      infiniteQuery.fetchNextPage();
    }
  }, [inView]);

  return (
    <WrapStyled>
      <Header />
      {closeModal && (
        <ModalWide closeModal={() => setCloseModal(!closeModal)}>
          <AddContentModal
            choseCategory={choseCategory}
            closeModal={() => setCloseModal(!closeModal)}
          />
        </ModalWide>
      )}
      {closeSearch && (
        <SearchModal closeSearch={() => setCloseSearch(!closeSearch)} />
      )}
      <ContainerStyled>
        <button
          className="ForB"
          onClick={() => {
            setCurrentStack(!CurrentStack);
          }}
        >
          {CurrentStack ? "FE 로드맵으로 전환" : "BE 로드맵으로 전환"}
        </button>
        <div className="header">
          {(CurrentStack ? BackStack : FrontStack)?.map((x, idx) => {
            return (
              <React.Fragment key={idx}>
                <RoadmapStack data={x} setChoseStack={setChoseStack} />
                <p>{`=>`}</p>
              </React.Fragment>
            );
          })}
          <div>다음 배울 거는?</div>
        </div>
        <div className="hr">
          <RoadmapGuide />
        </div>
        <BodyStyled>
          <div className="category">
            {CurrentCategory?.map((x, idx) => {
              return (
                <React.Fragment key={x.id}>
                  <RoadmapCategory
                    data={x}
                    setChoseCategory={setChoseCategory}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <ContentContainerStyled>
            <button
              className="Search"
              onClick={() => {
                setCloseSearch(!closeSearch);
              }}
            >
              <GrSearchAdvanced />
            </button>
            <TitleCategoryStyled>
              <RoadmapContentHeader
                setSort={setSort}
                getSort={getSort}
                setCloseModal={setCloseModal}
                contentHeader={contentHeader}
                closeModal={closeModal}
              />
            </TitleCategoryStyled>
            <div className="ContentBorder">
              {infiniteQuery.data?.pages.map((x, idx) => {
                return (
                  <React.Fragment key={idx}>
                    {x?.result[0]?.contentList.map((y, keys) => {
                      if (keys % 7 === 6) {
                        return (
                          <RoadmapContent
                            ref={ref}
                            key={y.id}
                            querykey={choseCategory}
                            data={y}
                          />
                        );
                      } else {
                        return (
                          <RoadmapContent
                            key={y.id}
                            querykey={choseCategory}
                            data={y}
                          />
                        );
                      }
                    })}
                  </React.Fragment>
                );
              })}
            </div>
          </ContentContainerStyled>
        </BodyStyled>
      </ContainerStyled>
    </WrapStyled>
  );
};

export default RoadMap;

const WrapStyled = styled.div`
  display: flex;

  background-color: #10141b; // rgb(32, 8, 64, 1);
  width: 100%;
  height: 100%;
  z-index: -5;
`;
const ContainerStyled = styled.div`
  display: flex;
  position: relative;
  border: 20px solid black;
  flex-direction: column;
  width: 95%;
  height: 95%;
  margin: auto;
  color: white;
  border-radius: 20px;
  font-family: "neodgm", monospace;
  font-style: normal;
  /* word-break: keep-all; */
  background-image: url(${GreateHall});
  background-size: cover;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    height: 15%;
  }
  .hr {
    width: 90%;
    margin: auto;
    border-top: 1px solid rgb(230, 222, 222);
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ForB {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 10%;
    height: 5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1rem;
    font-family: "neodgm";
    color: white;
    background-color: transparent;
    transition: all 0.2s ease;
    &:hover {
      background-color: black;
      border: 1px solid black;
      cursor: pointer;
    }
  }
`;
const BodyStyled = styled.div`
  display: grid;
  width: 100%;
  height: 80%;
  grid-template-columns: 20% 80%;
  .category {
    grid-column-start: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid white;
  }
`;
const fontsize = keyframes`
0%{
  font-size: 2rem;
}
  25%{
    font-size: 3rem;
  }
  50%{
    font-size: 2rem;;
  }
  75%{
    font-size: 1rem;
  }
  100%{
    font-size: 2rem;
  }
`;
const ContentContainerStyled = styled.div`
  position: relative;
  grid-column-start: 2;
  overflow: auto;
  display: grid;
  grid-template-rows: 3% 97%;
  border: 1px solid white;
  width: 100%;
  .ContentBorder {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-row-start: 2;
  }
  .Search {
    position: fixed;
    margin-top: 2%;
    margin-left: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    z-index: 5;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    &:hover {
      animation: ${fontsize} 2s ease-in infinite;
    }
  }
`;

const TitleCategoryStyled = styled.span`
  position: fixed;
  grid-row-start: 1;
  margin: auto;
  width: 75%;
  height: 3%;
  font-size: 1.3rem;
  z-index: 5;
`;
