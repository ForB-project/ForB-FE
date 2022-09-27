import React from "react";
import styled from "styled-components";
import { ContentCommunity } from "./index";

import * as S from "./styeld";

const BodyCommunity = ({ title, author, stack }) => {
  return (
    <>
      <S.Body>
        <ContentCommunity
          title={`이거모에여`}
          author={"코린이"}
          stack={"frontend"}
        />
        <ContentCommunity
          title={`제 코드 좀 봐주세요`}
          author={"응애개발자"}
          stack={"backend"}
        />
        <ContentCommunity
          title={`도대체 이게 뭐죠`}
          author={"이거모에용"}
          stack={"backend"}
        />
        <ContentCommunity
          title={`React 이거 맞아요? 진짜요?`}
          author={"개발자(진)"}
          stack={"frontend"}
        />
        <ContentCommunity
          title={`서버 배포하는데 이거 맞습니까`}
          author={"백조아"}
          stack={"backend"}
        />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />
        <ContentCommunity />

        <div> 1 2 3 4 5 </div>
      </S.Body>
    </>
  );
};

export default BodyCommunity;
