import React from "react";
import styled from "styled-components";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const EditFooter = ({ onSubmit }) => {
  const navigate = useNavigate();
  return (
    <StyledDiv>
      <StyledButton
        color="black"
        bg="white"
        display="flex"
        onClick={() => {
          navigate(-1);
        }}
      >
        <MdOutlineArrowBack size="23px" />
        &nbsp; 나가기
      </StyledButton>
      <StyledInnerDiv>
        <StyledButton bg="#ffffff" onClick={onSubmit}>
          저장하기
        </StyledButton>
      </StyledInnerDiv>
    </StyledDiv>
  );
};

export default EditFooter;
const StyledDiv = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 45.5vw;
  height: 90px;
  font-size: 28px;
  box-shadow: 0 0 8px rgb(0 0 0 / 20%);
  bottom: 0px;
  z-index: 2;
`;
const StyledInnerDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const StyledButton = styled.button`
  display: ${props => props.display};
  align-items: center;
  margin: 20px;
  cursor: pointer;
  background-color: ${props => props.bg || "#14B886"};
  color: ${props => props.color || "black"};
  font-size: 1.2rem;
  font-weight: 500;
  width: 110px;
  height: 55px;
  border-radius: 6px;
  align-items: center;
  transition: 0.3s;
  border: 1px solid transparent;
  &:hover {
    background-color: black;
    border: 1px solid white;
    color: ${props => props.hovercolor || "white"};
  }
`;
