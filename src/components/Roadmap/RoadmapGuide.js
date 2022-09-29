import React, { useEffect, useState } from "react";
import styled from "styled-components";
const RoadmapGuide = props => {
  const [tipNum, setTipNum] = useState(1);
  const [currentTip, setCurrentTip] = useState();
  const tips = [
    { id: 1, tip: "블로그,게시물이 도움이 되었다면 좋아요를 눌러주세요" },
    { id: 2, tip: "게시물을 추가할때 사진을 안넣으면 기본이미지가 들어갑니다" },
    {
      id: 3,
      tip: "왼쪽 상단에 BE 로드맵 버튼을 누르면 백엔드 로드맵을 볼 수 있어요",
    },
    {
      id: 4,
      tip: "게시글을 올리고 일정기간 동안 좋아요를 못받으면 사라집니다",
    },
    {
      id: 5,
      tip: "저희 사이트는 구글링 하는 것을 줄이기 위해 도움을 줄려고 만들어졌습니다",
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

export default RoadmapGuide;

const SpanStyled = styled.span`
  font-size: 1.3rem;

  filter: drop-shadow(-2px 0 0 black) drop-shadow(2px 0 0 black)
    drop-shadow(0 -2px 0 black) drop-shadow(0 2px 0 black);
`;
