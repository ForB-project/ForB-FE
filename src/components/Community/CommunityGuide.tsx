import React, { useEffect, useState } from "react";
import styled from "styled-components";
const CommunityGuide = props => {
  const [tipNum, setTipNum] = useState(1);
  const [currentTip, setCurrentTip] = useState({
    id: 1,
    tip: "궁금한게 있다면 글을 써서 자세하게 물어보세요",
  });
  const tips = [
    { id: 1, tip: "궁금한게 있다면 글을 써서 자세하게 물어보세요" },
    { id: 2, tip: "찾고 싶은 게시글의 제목을 검색하면 찾을 수 있습니다" },
    {
      id: 3,
      tip: "게시판의 제목을 클릭하면 상세페이지로 이동 할 수 있습니다",
    },
    {
      id: 4,
      tip: "게시판의 작성자 이름을 클릭하면 메세지를 보낼 수 있습니다",
    },
    {
      id: 5,
      tip: "다른사람의 게시글에 도움을 주세요!",
    },
  ];

  const nextTip = () => {
    let currenttip = tips.find(x => x.id === tipNum);
    setCurrentTip(currenttip);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      if (tipNum + 1 >= 6) {
        setTipNum(1);
        nextTip();
      } else {
        setTipNum(tipNum + 1);
        nextTip();
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [tipNum]);
  return <SpanStyled>{currentTip?.tip}</SpanStyled>;
};

export default CommunityGuide;

const SpanStyled = styled.div`
  width: 70vw;
  text-align: center;
  margin: 30px 0 0 12vw;
  font-size: 1.3rem;

  filter: drop-shadow(-2px 0 0 black) drop-shadow(2px 0 0 black)
    drop-shadow(0 -2px 0 black) drop-shadow(0 2px 0 black);
`;
