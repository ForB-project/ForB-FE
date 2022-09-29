import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import {
  RoadmapStack,
  RoadmapCategory,
  RoadmapContent,
  Header,
  ModalWide,
  AddContentModal,
  RoadmapGuide,
} from "../components";
import { RoadmapAPI } from "../shared/api";
import { GreateHall } from "../static";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const RoadMap = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  const [pageParam, setPageParam] = useState(1);

  const [closeModal, setCloseModal] = useState(false);

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
  const getCategory = async StackId => {
    return await RoadmapAPI.getCategory(StackId);
  };
  const categoryList = useQuery(
    ["categoryList", choseStack],
    () => getCategory(choseStack),
    { keepPreviousData: true }
  );
  const CurrentCategory = categoryList.data?.data.data;

  //Content 불러오는 부분
  const [choseCategory, setChoseCategory] = useState({
    id: 1,
    title: "html",
  });
  const [contentList, setContentList] = useState([]);
  const getContent = async (data, page) => {
    const res = await RoadmapAPI.getContent(data, page);

    return res;
  };
  const contentlistdata = useQuery(
    ["contentList", choseCategory, pageParam],
    () => getContent(choseCategory, pageParam)
  );
  const ContentData = contentlistdata.data?.data.data[0];
  const AddList = ContentData?.contentList;

  useEffect(() => {
    if (AddList) {
      setContentList([...contentList, ...AddList]);
    }
  }, [AddList, pageParam]);

  //로그인 안돼있으면 홈페이지로
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    if (!inView) {
      return;
    }
    setPageParam(pageParam + 1);
  }, [inView]);

  // if (Stacklist.isLoading) return <div>로딩중</div>;
  // if (categoryList.isLoading) return <div>로딩중</div>;
  // if (contentlistdata.isLoading) return <div>로딩중</div>;
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
                <React.Fragment key={idx}>
                  <RoadmapCategory
                    data={x}
                    setChoseCategory={setChoseCategory}
                    setContentList={setContentList}
                    setPageParam={setPageParam}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <ContentContainerStyled>
            <TitleCategoryStyled>
              <div className="centerItem">
                {ContentData?.title} {">"} {ContentData?.category}
                {" >"}
                <button onClick={() => setCloseModal(!closeModal)}>
                  추가하기
                </button>
              </div>
            </TitleCategoryStyled>
            <div className="ContentBorder">
              {contentList?.map((x, idx) => {
                if (idx % 7 === 6) {
                  return <RoadmapContent ref={ref} key={idx} data={x} />;
                } else {
                  return <RoadmapContent key={idx} data={x} />;
                }
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
  /* border: 1px solid white; */
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
const ContentContainerStyled = styled.div`
  position: relative;
  grid-column-start: 2;
  overflow: auto;
  display: grid;
  grid-template-rows: 3% 97%;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
  border: 1px solid white;
  width: 100%;
  .ContentBorder {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-row-start: 2;
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

  .centerItem {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: auto;
    border-radius: 10px;
    background-color: rgb(100, 100, 100, 0.9);
  }
  button {
    margin-left: 30px;
    width: 150px;
    border: 3px solid white;
    border-radius: 10px;
    color: white;
    font-family: "neodgm";
    font-weight: 700;
    background-color: black;
    font-size: 1.2rem;
    &:hover {
      background-color: #424040;

      color: white;
      cursor: pointer;
    }
  }
`;
