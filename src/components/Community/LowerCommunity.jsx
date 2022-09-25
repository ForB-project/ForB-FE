import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WriteModal from "../Modal/WriteModal";

//재사용 component rename필
const LowerCommunity = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <LowerStyled>
        {/* <LeftBoxStyled>
          <RoadmapButton onClick={() => navigate("/result")}>
            결과창 다시보기
          </RoadmapButton>
        </LeftBoxStyled> */}
        <CenterBoxStyled>
          <WriteButton onClick={showModal}>write</WriteButton>
          {modalOpen && <WriteModal setModalOpen={setModalOpen} />}
        </CenterBoxStyled>
        {/* <RightBoxStyled>
          <CodingButton onClick={() => navigate("/testcode")}>
            코딩 테스트해보기
          </CodingButton>
        </RightBoxStyled> */}
      </LowerStyled>
    </>
  );
};

export default LowerCommunity;

const LowerStyled = styled.div`
  /* border: 1px dashed green; */

  text-align: center;

  margin: 1vh;
  padding-top: 2vh;
`;

const LeftBoxStyled = styled.div`
  /* border: 1px dashed purple; */

  border-radius: 10px;
  /* background-color: #9e6c31; */
  border: 8px dashed black;
  background-color: #10141b;
  opacity: 0.8;

  margin: 1vw;
  display: inline-block;
  width: 20vw;
`;
const RoadmapButton = styled.button`
  border: none;

  color: gray;
  font-size: 20px;
  font-family: "neodgm";

  width: 100%;
  height: 5vh;
  background: none;

  cursor: pointer;
  &:hover {
    font-size: 21px;
    color: white;
    opacity: 1;
  }
`;

const CenterBoxStyled = styled.div`
  /* border: 1px dashed purple; */

  border-radius: 10px;
  /* background-color: #9e6c31; */
  border: 8px dashed black;
  background-color: #10141b;
  opacity: 0.8;

  margin: 1vw;
  display: inline-block;
  width: 20vw;
`;
const WriteButton = styled.button`
  border: none;

  color: gray;
  font-size: 2rem;
  font-family: "neodgm";

  width: 100%;
  height: 5vh;
  background: none;

  cursor: pointer;
  &:hover {
    font-size: 2.5rem;
    color: white;
    opacity: 1;
  }
`;
const RightBoxStyled = styled.div`
  /* border: 1px dashed green; */

  border-radius: 10px;
  /* background-color: #9e6c31; */
  border: 8px dashed black;
  background-color: #10141b;
  opacity: 0.8;

  margin: 1vw;
  display: inline-block;
  width: 20vw;
`;
const CodingButton = styled.button`
  border: none;

  color: gray;
  font-size: 20px;
  font-family: "neodgm";

  width: 100%;
  height: 5vh;
  background: none;

  cursor: pointer;
  &:hover {
    font-size: 21px;
    color: white;
    opacity: 1;
  }
`;
