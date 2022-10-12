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
        <StyledButton hover="#21C997" onClick={onSubmit}>
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
  background-color: white;
  width: 50vw;
  height: 80px;
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
  color: ${props => props.color || "white"};
  font-size: 23px;
  font-weight: 500;
  width: 125px;
  height: 55px;
  border-radius: 6px;
  align-items: center;
  &:hover {
    background-color: ${props => props.hover || "#F4F4F4"};
  }
`;
