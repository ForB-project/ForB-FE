import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import {
  RoadmapStack,
  RoadmapCategory,
  RoadmapContent,
  Header,
} from "../components";
import { RoadmapAPI } from "../shared/api";
import { GreateHall } from "../static";
import { useNavigate } from "react-router-dom";

const RoadMap = () => {
  const navigate = useNavigate();
  //   const [closeModal, setCloseModal] = useState(false);
  const [choseStack, setChoseStack] = useState(1);
  const [choseCategory, setChoseCategory] = useState({ id: 1, title: "html" });

  //Stack 불러오는 부분
  const getStack = async () => {
    return await RoadmapAPI.getStack();
  };
  const Stacklist = useQuery("Stacklist", getStack, { keepPreviousData: true });
  const FrontStack = Stacklist.data?.data.data[0]["frontList"];
  const BackStack = Stacklist.data?.data.data[0]["backList"];
  const [CurrentStack, setCurrentStack] = useState(false);
  // console.log(currentStack);
  //StackId 이용해서 category불러오는 부분
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
  const getContent = async data => {
    return await RoadmapAPI.getContent(data);
  };
  const contentlistdata = useQuery(["contentList", choseCategory.id], () =>
    getContent(choseCategory)
  );
  const ContentList = contentlistdata.data?.data.data[0];

  //로그인 안돼있으면 홈페이지로
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, []);

  if (Stacklist.isLoading) return;
  if (categoryList.isLoading) return;
  if (contentlistdata.isLoading) return;
  return (
    <WrapStyled>
      <Header />
      <ContainerStyled>
        <button
          className="ForB"
          onClick={() => {
            setCurrentStack(!CurrentStack);
          }}
        >
          {CurrentStack ? "FE 로드맵" : "BE 로드맵"}
        </button>
        <div className="header">
          {(CurrentStack ? BackStack : FrontStack)?.map(x => {
            return (
              <React.Fragment key={x.id}>
                <RoadmapStack data={x} setChoseStack={setChoseStack} />
                <p>{`=>`}</p>
              </React.Fragment>
            );
          })}
          <div>다음 배울 거는?</div>
        </div>
        <div className="hr">hr</div>
        <BodyStyled>
          <div className="category">
            {CurrentCategory?.map(x => {
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
          <div className="body">
            <TitleCategoryStyled>
              {ContentList?.title} {">"} {ContentList?.category}
            </TitleCategoryStyled>
            {ContentList?.contentList.map((x, idx) => {
              return <RoadmapContent key={x.id} data={x} />;
            })}
          </div>
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
    border: 1px solid black;
    height: 15%;
  }
  .hr {
    width: 100%;
    border: 1px solid white;
    height: 5%;
  }
  .ForB {
    position: fixed;
    top: 5%;
    left: 5%;
    border: none;
  }
`;
const BodyStyled = styled.div`
  display: grid;
  width: 100%;
  border: 1px solid white;
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
  .body {
    position: relative;
    grid-column-start: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid white;
    padding-top: 30px;
  }
`;

const TitleCategoryStyled = styled.span`
  position: absolute;
  display: block;
  top: 10px;
  left: 10px;
  width: 100%;
  font-size: 1.2rem;
`;
