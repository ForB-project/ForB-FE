import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WriteToolBox from "../WriteComponent/WriteToolBox";

const EditTitle = ({
  setTitle,
  setImage,
  setAttachment,
  setHeader,
  setTextStyle,
  title,
}) => {
  return (
    <StyledDiv>
      <div>
        <StyledTitleInput
          placeholder="제목을 입력하세요"
          onChange={e => setTitle(e.target.value)}
          defaultValue={title}
        />
      </div>
      <hr
        style={{
          height: "8px",
          backgroundColor: "#d9e1e9",
          marginTop: "1rem",
          border: "none",
          width: "80px",
        }}
      />
      <div className="elements">
        <WriteToolBox
          setImage={setImage}
          setHeader={setHeader}
          setTextStyle={setTextStyle}
          setAttachment={setAttachment}
        />
      </div>
    </StyledDiv>
  );
};

export default EditTitle;

const StyledDiv = styled.div`
  width: 100%;
  .elements {
    margin: 20px auto;
  }
`;
const StyledTitleInput = styled.input`
  font-weight: 600;
  height: 7vh;
  width: 100%;
  border: none;
  font-size: 44px;
  color: #d9e1e9;
  background-color: black;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #d9e1e9;
  }
`;
