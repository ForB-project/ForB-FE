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
          <Titlestyled>레번클로</Titlestyled>
        </Topstyled>
        <Bodystyled>
          <div>'가장 독창적이고 효율적인 로직을 작성하는 개발자'</div>
          <P1>.</P1>
          <p></p>
          <div>
            자네는 상당히 지능적이고, 독창적인 면모를 지닌 개발자의 특성을
            지니고 있어.
            <P1>.</P1>
            <p>보통사람은 생각하지 못하는, 더 효율적인 방법을 고민하는</p>
            <p>
              자네의 모습을 보니 우리의 이념에 딱 들어 맞는 인재임이 틀림없군.
            </p>
            <p>다소 괴짜스럽고 엉뚱한 해결방법을 생각해냈다고? </p>
            <p> 효율적으로 기능한다면 전혀 문제가 없으니 걱정말게.</p>
            <P1>.</P1>
            <span>
              자네는 훌륭한 백엔드 개발자가 될 수 있을꺼야. 내가 보증하지!
            </span>
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
  height: 17vh;
  line-height: 17vh;

  font-size: 7rem;
`;
const Emblem = styled.div`
  /* border: 1px dashed green; */

  display: inline-block;
  float: left;
  margin-left: 2vw;

  width: 12vw;
  height: 17vh;
`;
const Titlestyled = styled.div`
  /* border: 1px dashed blue; */

  padding-right: 27vh;
`;

const Bodystyled = styled.div`
  /* border: 1px dashed red; */

  margin-left: 17vw;
  padding: 1vh;
  height: 40vh;

  font-size: 3rem;
  text-align: left;
`;
const P1 = styled.div`
  color: black;
`;

const Footerstyled = styled.div`
  /* border: 1px dashed purple; */

  display: inline-block;
  /* margin: 1vh; */
  height: 5vh;

  font-size: 3rem;
  line-height: 5vh;
`;
