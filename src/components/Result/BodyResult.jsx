import React from "react";
import styled from "styled-components";
import { r_p } from "../../static";

const BodyResult = () => {
  //   const dispatch = useDispatch();

  "logo";
  "title";
  "contents";
  "footer";

  //   useEffect(() => {
  //     dispatch("_getResult");
  //   }, [dispatch]);

  return (
    <BodyStyled>
      <ContentsStyled>
        <Topstyled>
          <Emblem>
            <img src={r_p} alt="crest" />
          </Emblem>
          <Titlestyled>레반클로</Titlestyled>
        </Topstyled>
        <Bodystyled>
          <div>'가장 독창적인 로직을 작성하는 개발자를 양성하는 곳'</div>
          <p></p>
          <div>
            우리는 가장 지능적이고 지혜로우며 독창적인 면모를 지닌 개발자를
            양성하는게 목표지.
            <p>
              당장 문제를 해결하는 것 보다는 시간을 들여 꼼꼼하게 문제를
              해결하는 자네의 모습을 보니
            </p>
            <p>우리의 이념에 딱 들어 맞는 인재임에 틀림이 없네.</p>
            <p>.</p>
            <p>
              다소 괴짜스럽거나 엉뚱한 모습이 있어도 별 문제가 되지는 않으니
              걱정말게.
            </p>
            <span>자네는 훌륭한 백엔드 개발자가 될 수 있을테니까.</span>
          </div>
        </Bodystyled>
        <Footerstyled>
          <div> 보완점 / 상성 / 2지망</div>
        </Footerstyled>
      </ContentsStyled>
    </BodyStyled>
  );
};

export default BodyResult;

const BodyStyled = styled.div`
  /* border: 1px solid black; */

  border-radius: 50px;
  background-color: black;
  /* background-color: white; */
  opacity: 0.95;
  transition: 0.5s;

  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
  width: 70vw;
  height: 70vh;

  text-align: center;
`;

const ContentsStyled = styled.div`
  padding: 1vh;

  color: white;
  font-size: 2rem;
  font-family: "neodgm";
`;
const Topstyled = styled.div`
  /* border: 1px dashed black; */

  margin: 1vh;
  height: 20vh;
  line-height: 20vh;

  font-size: 7rem;
`;
const Emblem = styled.div`
  /* border: 1px dashed green; */

  display: inline-block;
  float: left;
  margin-left: 2vw;

  width: 12vw;
  height: 20vh;
`;
const Titlestyled = styled.div`
  /* border: 1px dashed blue; */

  /* display: inline-block; */
  padding-right: 18vh;

  /* width: 20vw; */
  height: 20vh;
`;

const Bodystyled = styled.div`
  /* border: 1px dashed red; */
  margin: 1vh;
  padding: 1vh;

  height: 35vh;

  font-size: 3rem;
`;
const Footerstyled = styled.div`
  /* border: 1px dashed purple; */
  display: inline-block;

  margin: 1vh;

  height: 5vh;

  font-size: 3rem;
  line-height: 5vh;
`;
