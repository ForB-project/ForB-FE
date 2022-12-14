import React, { useEffect, useState } from "react";

import styled from "styled-components";
const Pagenation = props => {
  const postCount =
    props.postCount % 6 === 0
      ? parseInt(props.postCount / 6)
      : parseInt(props.postCount / 6) + 1;

  const [numberList, setnumberList] = useState([1, 2, 3]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const startNum = (page - 1) * rowsPerPage + 1;
  const endNumber =
    startNum + rowsPerPage - 1 >= postCount
      ? postCount
      : startNum + rowsPerPage - 1;
  let numList = [];
  const setlist = () => {
    for (let i = startNum; i <= endNumber; i++) {
      numList.push(i);
    }
    setnumberList(numList);
  };
  useEffect(() => {
    setlist();
  }, [page, postCount]);

  return (
    <PagenationBoxStyled>
      <div
        className="fastpagenation"
        onClick={() => {
          if (page >= 2) {
            setPage(page - 1);
          }
        }}
      >
        {" "}
        {`<<`}
      </div>

      {numberList.map((x, idx) => {
        if (props.pageParam === x) {
          return (
            <div key={idx}>
              <span
                className="currentpage"
                onClick={() => {
                  props.setPageParam(x);
                }}
              >
                {x}
              </span>
              {idx === numberList.length - 1 ? "" : "|"}
            </div>
          );
        } else {
          return (
            <div key={idx}>
              <span
                onClick={() => {
                  props.setPageParam(x);
                }}
              >
                {x}
              </span>
              {idx === numberList.length - 1 ? "" : "|"}
            </div>
          );
        }
      })}

      <div
        className="fastpagenation"
        onClick={() => {
          if (page < postCount / rowsPerPage) {
            setPage(page + 1);
          }
        }}
      >
        {`>>`}
      </div>
    </PagenationBoxStyled>
  );
};

export default Pagenation;

const PagenationBoxStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 2vh;
  span {
    margin: 0 10px;
    width: 3vw;
    &:hover {
      background-color: black;
      border-radius: 10px;
      cursor: pointer;
    }
  }
  .fastpagenation {
    &:hover {
      cursor: pointer;
    }
  }
  .currentpage {
    font-weight: 900;
    color: greenyellow;
  }
`;
