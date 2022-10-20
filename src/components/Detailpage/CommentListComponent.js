import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CommentAPI, MessageAPI } from "../../shared/api";
import { getUserName, setAccessToken } from "../../shared/storage";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useInput from "../../hooks/useInput";
import Modal from "../Modal/Modal";
const CommentListComponent = props => {
  const navigate = useNavigate();
  // 댓글 불러오기
  const [getPageParam, setPageParam] = useState(1);
  const getComment = async (postId, pageParam) => {
    const res = await CommentAPI.getcommnet(postId, pageParam);
    return res.data.data;
  };
  const myCommentQuery = useQuery(
    ["CommentList", props.contentId, getPageParam],
    () => getComment(props.contentId, getPageParam)
  );

  // 댓글 작성
  const textRef = useRef(null);
  const [inputs, onChange] = useInput(null);
  const newComment = async data => {
    const res = await CommentAPI.addcomment(data.contentId, {
      content: data.content,
    });
    textRef.current.value = null;

    return res;
  };
  const queryClient = useQueryClient();
  const AddComment = useMutation(newComment, {
    onSuccess: () => {
      queryClient.invalidateQueries([
        "CommentList",
        props.contentId,
        getPageParam,
      ]);
    },
  });
  //댓글 삭제
  const [closeModal2, setCloseModal2] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const deleteComment = async commentId => {
    const res = await CommentAPI.deletecomment(commentId);

    return res;
  };
  const DeleteComment = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries([
        "CommentList",
        props.contentId,
        getPageParam,
      ]);
    },
  });
  //댓글 수정
  const modifyRef = useRef(null);
  const [closeModal, setCloseModal] = useState(false);
  const [defaultData, setDefaultData] = useState(null);
  const modify = async data => {
    const res = await CommentAPI.modifyComment(data.id, { content: data.data });
    return res;
  };
  const modifyComment = useMutation(modify, {
    onSuccess: () => {
      queryClient.invalidateQueries([
        "CommentList",
        props.contentId,
        getPageParam,
      ]);
    },
  });

  // 메세지페이지로 이동
  const [closeMessage, setCloseMessage] = useState(false);
  const [getUserId, setUserId] = useState(null);
  const [getUserNickName, setUserNickName] = useState(null);
  const joinroom = async memberId => {
    const res = await MessageAPI.joinroom(memberId);
  };
  return (
    <React.Fragment>
      <DetailCommentStyled>
        <div className="CommentAddBox">
          <div>댓글작성</div>
          <textarea
            placeholder="댓글작성"
            onChange={onChange}
            name="content"
            ref={textRef}
          />
          <div
            onClick={() => {
              AddComment.mutate({
                contentId: props.contentId,
                content: inputs.content,
              });
            }}
          >
            댓글달기
          </div>
        </div>
        <div className="CommentBody">
          <div className="pagenation">
            <div
              onClick={() => {
                if (getPageParam >= 2) {
                  setPageParam(getPageParam - 1);
                }
              }}
            >
              이전 댓글
            </div>
            <span>{getPageParam}</span>
            <div
              onClick={() => {
                if (props.CommentCount / 6 > getPageParam) {
                  setPageParam(getPageParam + 1);
                }
              }}
            >
              {" "}
              다음 댓글
            </div>
          </div>
          <div>
            {myCommentQuery.data?.map(x => (
              <div className="CommentBodyMain" key={x.id}>
                <div
                  className="tomessage"
                  onClick={() => {
                    setCloseMessage(!closeMessage);
                    setUserId(x.memberId);
                    setUserNickName(x.nickname);
                  }}
                >
                  {x.nickname}
                </div>
                <div>{x.content}</div>
                {getUserName() === x.nickname && (
                  <div>
                    <div
                      className="modifybutton"
                      onClick={() => {
                        setDeleteId(x.id);
                        setCloseModal2(!closeModal2);
                      }}
                    >
                      삭제
                    </div>
                    {`  |  `}
                    <div
                      className="modifybutton"
                      onClick={() => {
                        setCloseModal(!closeModal);
                        setDefaultData({ value: x.content, commentId: x.id });
                      }}
                    >
                      수정
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {closeModal && (
          <ModalStyled>
            <Modal wide closeModal={() => setCloseModal(!closeModal)}>
              <textarea
                defaultValue={defaultData.value}
                ref={modifyRef}
              ></textarea>

              <button
                className="CloseButton"
                onClick={() => {
                  setCloseModal(!closeModal);
                }}
              >
                Cancel
              </button>
              <button
                className="ModifyButton"
                onClick={() => {
                  modifyComment.mutate({
                    id: defaultData.commentId,
                    data: modifyRef.current.value,
                  });
                  setCloseModal(!closeModal);
                }}
              >
                수정완료
              </button>
            </Modal>
          </ModalStyled>
        )}
      </DetailCommentStyled>
      {closeModal2 && (
        <Modal closeModal={() => setCloseModal2(!closeModal2)}>
          <DeleteContentStyled>
            <div></div>
            <div>댓글을</div>
            <div>삭제하시겠습니까?</div>
          </DeleteContentStyled>
          <button
            id="deleteButton"
            onClick={() => {
              DeleteComment.mutate(deleteId);
              setCloseModal2(!closeModal2);
            }}
          >
            Delete
          </button>
          <button
            id="modalCloseBtn"
            onClick={() => setCloseModal2(!closeModal2)}
          >
            Cancel
          </button>
        </Modal>
      )}
      {closeMessage && (
        <Modal closeModal={() => setCloseMessage(!closeMessage)}>
          <DeleteContentStyled>
            <div>{getUserNickName}님에게</div>
            <div>메세지를 </div>
            <div>보내시겠습니까?</div>
          </DeleteContentStyled>
          <button
            id="deleteButton"
            onClick={() => {
              joinroom(getUserId);
              navigate(`/message`);
            }}
          >
            Message
          </button>
          <button
            id="modalCloseBtn"
            onClick={() => setCloseMessage(!closeMessage)}
          >
            Cancel
          </button>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default CommentListComponent;

const DeleteContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-top: 15px;
  font-size: 3vmin;
  color: black;
  div {
    margin-bottom: 15px;
  }
`;

const DetailCommentStyled = styled.div`
  display: grid;
  grid-template-rows: 15% 85%;
  width: 75%;
  min-height: 10vh;
  /* border: 1px solid black; */
  margin: 5vh auto 10vh auto;
  .CommentAddBox {
    display: grid;

    grid-template-columns: 15% 70% 15%;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      transition: 0.3s;
      &:hover {
        font-size: 1.4rem;
        cursor: pointer;
      }
    }
    textarea {
      font-size: 18px;
      width: 100%;
      min-height: 4vh;
      resize: none;
      border: 1px solid black;
      outline: none;
      border-radius: 10px;
      &:focus {
        border: 1px solid black;
      }
    }
  }
  .modifybutton {
    border: 1px solid transparent;
    width: 40%;
    height: 40%;
    border-radius: 20px;
    transition: 0.3s;
    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  }
  .CommentBody {
    display: flex;
    flex-direction: column;
    width: 100%;

    .CommentBodyMain {
      display: grid;
      grid-template-columns: 15% 70% 15%;
      min-height: 10vh;
      font-size: 1rem;
      color: white;
      border-bottom: 1px solid white;
      .tomessage {
        &:hover {
          cursor: pointer;
          font-size: 1.2rem;
        }
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .pagenation {
      border-bottom: 1px solid white;
      margin-top: 5vh;
      padding-bottom: 10px;
      display: flex;
      color: white;
      justify-content: space-around;
      align-items: center;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8vw;
        height: 20px;
        border: 1px solid black;
        border-radius: 10px;
        transition: 0.3s;
        &:hover {
          background-color: white;
          color: black;
          cursor: pointer;
        }
      }
    }
  }
`;
const ModalStyled = styled.div`
  button {
    position: absolute;

    z-index: 11;
    right: 88px;
    border: 1px solid rgb(220, 220, 220);
    width: 60%;
    height: 10%;
    border-radius: 12%/60%;
    color: rgba(0, 0, 0, 0.7);
    background-color: transparent;
    font-size: 1rem;
    font-weight: 600;
    transition: 0.3s;
  }
  .CloseButton {
    bottom: 8%;
    &:hover {
      background-color: rgb(230, 230, 230);
      cursor: pointer;
    }
  }
  .ModifyButton {
    bottom: 20%;
    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
  textarea {
    font-size: 18px;
    width: 100%;
    min-height: 65%;
    resize: none;
    border: 1px solid black;
    outline: none;
    border-radius: 10px;
    &:focus {
      border: 1px solid black;
    }
  }
`;
