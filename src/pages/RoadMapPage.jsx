import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import {
  RoadmapStack,
  RoadmapCategory,
  RoadmapContent,
  Header,
} from "../components";
import { StackAPI } from "../shared/jsonsever";
import { GreateHall } from "../static";

const RoadMap = () => {
  //   const [closeModal, setCloseModal] = useState(false);
  const [choseStack, setChoseStack] = useState(1);
  const [choseCategory, setChoseCategory] = useState(1);
  const getStack = async () => {
    return await StackAPI.gettwit();
  };
  const getContent = async () => {
    return await StackAPI.getcontent();
  };
  const Stacklist = useQuery("Stacklist", getStack);
  const contentlist = useQuery("contentlist", () => getContent());
  const datalist = Stacklist.data?.data;
  const contents = contentlist.data?.data;
  const choesdContent = contents?.find(x => x.id === choseCategory);

  // useEffect(() => {
  //   getStack();
  // }, []);
  if (Stacklist.isLoading) return;
  const StackOne = datalist.find(x => x.id == choseStack);
  const CategoryList = StackOne?.categorylist;
  console.log(CategoryList);

  return (
    <WrapStyled>
      <Header />
      <ContainerStyled>
        <div className="header">
          {datalist.map(x => {
            return (
              <React.Fragment key={x.id}>
                <RoadmapStack data={x} setChoseStack={setChoseStack} />
                <p>{`=>`}</p>
              </React.Fragment>
            );
          })}
          <div>다음 배울꺼는?</div>
        </div>
        <div className="hr">hr</div>
        <BodyStyled>
          <div className="category">
            {CategoryList?.map(x => {
              return (
                <RoadmapCategory
                  key={x.id}
                  data={x}
                  setChoseCategory={setChoseCategory}
                />
              );
            })}
          </div>
          <div className="body">
            {choesdContent?.contentlist.map((x, idx) => {
              return <RoadmapContent key={idx} data={x} />;
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
    grid-column-start: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid white;
  }
`;
