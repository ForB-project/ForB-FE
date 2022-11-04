import React from "react";
import styled from "styled-components";
import MarkdownPreview from "@uiw/react-markdown-preview";

const EditShow = ({ markdown }) => {
  document.documentElement.setAttribute("data-color-mode", "light");
  return (
    <StyledDiv>
      <StyledInnerDiv>
        <MarkdownPreview
          style={{ fontSize: "25px", backgroundColor: "#fbfdfc" }}
          source={markdown}
        />
      </StyledInnerDiv>
    </StyledDiv>
  );
};

export default EditShow;

const StyledDiv = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  top: 0px;
  height: 100vh;
  background-color: #fbfdfc;
`;
const StyledInnerDiv = styled.div`
  margin: 80px 50px 50px;
  font-size: 18px;
`;
