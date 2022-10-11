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
          backgroundColor: "#495057",
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
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #868e96;
  }
`;
const StyledTagInput = styled.input`
  background-color: transparent;
  display: inline-flex;
  outline: none;
  cursor: text;
  font-size: 1.125rem;
  line-height: 2rem;
  margin-bottom: 0.75rem;
  min-width: 8rem;
  border: none;
  font-weight: 400;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #7e7e7e;
  }
`;
const TagItem = styled.div`
  background-color: #f8f9fa;
  display: inline-flex;
  align-items: center;
  height: 2rem;
  border-radius: 1rem;
  padding: 0 1rem;
  margin: 0 0.75rem 0.75rem 0;
  cursor: pointer;
  transition: all 0.125s ease-in 0s;
  animation: 0.125s ease-in-out 0s 1 normal forwards running;
`;
const Tag = styled.div`
  color: #14b886;
  font-size: 1rem;
`;
const Button = styled.button``;
