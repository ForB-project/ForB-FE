import React, { useCallback, useEffect, useRef, useState } from "react";

import styled from "styled-components";
const Pagenation = props => {
  const postCount =
    props.postCount % 10 === 0
      ? parseInt(props.postCount / 10)
      : parseInt(props.postCount / 10) + 1;

  //   const [numberList, setNumberList] = useState([]);
  const [numberList, setnumberList] = useState([1, 2, 3]);
  const [page, setPage] = useState(1);
  const [currentpage, setcurrent] = useState(1);
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
  }, [page]);
  console.log(page);
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
        if (currentpage === x) {
          return (
            <div key={idx}>
              <span
                className="currentpage"
                onClick={() => {
                  props.setPageParam(x);
                  setcurrent(x);
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
                  setcurrent(x);
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
          console.log(postCount, rowsPerPage, page);
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
