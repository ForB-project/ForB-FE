import React, { forwardRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { mainFirst } from "../../static";
import { LikeAPI, ContentAPI } from "../../shared/api";
import { useMutation, useQueryClient } from "react-query";
import { FaHeart, FaRegHeart, FaTrashAlt } from "react-icons/fa";
import Modal from "../Modal/Modal";
const RoadmapContent = forwardRef((props, ref) => {
  const [closeModal, setCloseModal] = useState(false);
  const queryClient = useQueryClient();
  const thumbnail = props.data.thumbnail;
  function ContentHref() {
    window.open(props.data.link, "_blank");
  }

  const contentLike = async contentId => {
    const res = await LikeAPI.togglelike(contentId);

    return res;
  };
  const toggleLike = useMutation(contentLike, {
    onSuccess: res => {
      queryClient.invalidateQueries(["contentList", props.querykey]);
    },
  });

  const DeleteContent = async contentId => {
    const res = await ContentAPI.deleteContent(contentId);
    return res;
  };
  const deleteAction = useMutation(DeleteContent, {
    onSuccess: res => {
      queryClient.invalidateQueries(["contentList", props.querykey]);
    },
  });

  return (
    <>
      <ContentStyled onClick={() => {
            ContentHref();
          }}>
        <ContentImgStyled
          thumbnail={thumbnail}
          onClick={() => {
            ContentHref();
          }}
        />

        <StackStyled>
          <span
            className="ContentTitle"
            onClick={() => {
              ContentHref();
            }}
          >
            {props.data.title}
          </span>
          <p
            className="ContentDesc"
            onClick={() => {
              ContentHref();
            }}
          >
            {props.data.desc}
          </p>
        </StackStyled>
        {props.querykey === 1 ? (
          <div className="DeleteButton">
            <div
              className="DeleteBack"
              onClick={() => {
                setCloseModal(!closeModal);
              }}
            >
              <FaTrashAlt />
            </div>
          </div>
        ) : (
          <div
            className="LikeContent"
            onClick={() => {
              toggleLike.mutate(props.data.id);
            }}
          >
            <div className="heartBox">
              {props.data.heartCheck ? (
                <FaHeart className="icon" />
              ) : (
                <FaRegHeart className="icon" />
              )}
            </div>
            {props.data.heartCnt}
          </div>
        )}
        <div className="inviewref" ref={ref}></div>
      </ContentStyled>
      {closeModal && (
        <Modal closeModal={() => setCloseModal(!closeModal)}>
          <DeleteContentStyled>
            <div>게시물을</div>
            <div>삭제하시겠습니까?</div>
          </DeleteContentStyled>
          <button
            id="deleteButton"
            onClick={() => {
              deleteAction.mutate(props.data.id);
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
});

export default RoadmapContent;

const DeleteContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-top: 35px;
  font-size: 3vmin;
  div {
    margin-bottom: 15px;
  }
`;

const iconhover = keyframes`

        0% {
          font-size: 1rem;
        }
        50% {
          font-size: 1.5rem;
        }
        100% {
          font-size: 2rem;
        }
      `;
const ContentStyled = styled.div`
  display: grid;
  width: 70%;
  height: 100px;
  grid-template-columns: 30% 60% 10%;
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 10px;
  transition: 0.3s;
  &:hover {
    border: 1px solid black;
    background-color: black;
    cursor: pointer;
  }
  .DeleteButton {
    grid-column-start: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      .DeleteBack {
        width: 40px;
        height: 40px;
        border-radius: 99999px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: black;
      }
    }
  }
  .LikeContent {
    grid-column-start: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: black;
    }
    .heartBox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60%;
    }
    .icon {
      transition: 0.3s;
      animation: ${iconhover} 1s 1s infinite linear alternate;
      &:hover {
        color: pink;
      }
    }
  }
`;

const ContentImgStyled = styled.div`
  grid-column-start: 1;
  border-radius: 10px;
  width: 200px;
  height: 100px;
  background-image: url(${props =>
    props.thumbnail ? props.thumbnail : mainFirst});
  background-size: cover;
`;
const StackStyled = styled.div`
  grid-column-start: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .ContentTitle {
    padding-top: 5px;
    font-size: 1.3rem;
    filter: drop-shadow(-2px 0 0 black) drop-shadow(2px 0 0 black)
      drop-shadow(0 -2px 0 black) drop-shadow(0 2px 0 black);
  }
  .ContentDesc {
    font-size: 1rem;
    word-break: normal;
  }
`;
