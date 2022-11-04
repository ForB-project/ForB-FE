import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getUserName } from "../../shared/storage";
import Modal from "../Modal/Modal";

const DetailHeader = props => {
  const [closeModal, setCloseModal] = useState(false);
  const author = props.CommunityQuery?.data?.nickname;
  const navigate = useNavigate();
  return (
    <>
      <DetailHeaderStyled>
        <div
          onClick={() => {
            navigate("/community");
          }}
        >
          <div className="backbutton"> 게시판으로</div>
        </div>
        <div className="detailtitle">{props.CommunityQuery.data?.title}</div>
        <div>
          {getUserName() === author && (
            <>
              <div
                className="modifybutton"
                onClick={() => {
                  navigate(`/edit/${props.contentId}`);
                }}
              >
                수정
              </div>
              <span>|</span>

              <div
                className="modifybutton"
                onClick={() => {
                  setCloseModal(!closeModal);
                }}
              >
                삭제
              </div>
            </>
          )}
        </div>
      </DetailHeaderStyled>
      {closeModal && (
        <Modal closeModal={() => setCloseModal(!closeModal)}>
          <DeleteContentStyled>
            <div>게시물을</div>
            <div>삭제하시겠습니까?</div>
          </DeleteContentStyled>
          <button
            id="deleteButton"
            onClick={() => {
              props.DeleteCommunityContent(props.contentId);
              navigate("/community");
            }}
          >
            Delete
          </button>
          <button id="modalCloseBtn" onClick={() => setCloseModal(!closeModal)}>
            Cancel
          </button>
        </Modal>
      )}
    </>
  );
};

export default DetailHeader;

const DeleteContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-top: 35px;
  font-size: 2.5vmin;
  color: black;
  div {
    margin-bottom: 15px;
  }
`;
const DetailHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  width: 80%;
  height: 10vh;
  border: 1px solid transparent;
  font-family: "neodgm";
  font-size: 1.3rem;
  color: white;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detailtitle {
    font-size: 2rem;
  }
  .backbutton {
    border: 1px solid white;
    width: 80%;
    height: 50%;
    border-radius: 20px;
    transition: 0.3s;
    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  }
  .modifybutton {
    border: 1px solid white;
    width: 50%;
    height: 60%;
    border-radius: 20px;
    transition: 0.3s;
    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  }
`;
