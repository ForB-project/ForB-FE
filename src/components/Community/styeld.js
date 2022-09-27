import styled from "styled-components";

export const Body = styled.div`
  /* border: 1px dashed black; */

  border-radius: 50px;
  background-color: black;
  opacity: 0.95;
  transition: 0.5s;

  color: white;
  font-size: 2.5rem;
  font-family: "neodgm";

  margin: auto;
  width: 70vw;
  height: 70vh;
  padding-top: 1vh;

  text-align: center;
`;

export const Line = styled.div`
  /* border: 1px dashed purple; */
  display: flex;

  margin-top: 1.5vh;
  margin-bottom: 1.6vh;
  padding-left: 2vw;
  padding-right: 2vw;

  line-height: 3vh;

  opacity: 0.9;

  cursor: pointer;
  &:hover {
    font-size: 2.7rem;
    color: white;
    opacity: 1;
  }
`;
export const Title = styled.div`
  /* border: 1px dashed yellow; */

  border-radius: 5px;
  background-color: #10141b;

  width: 45vw;
  height: 3vh;

  padding-left: 1vw;
  text-align: left;
`;
export const Author = styled.div`
  /* border: 1px dashed pink; */

  border-radius: 5px;
  background-color: #10141b;

  width: 15vw;
  margin-left: 1vw;
  height: 3vh;
`;
export const Date = styled.div`
  /* border: 1px dashed aqua; */

  border-radius: 5px;
  background-color: #10141b;

  width: 15vw;
  margin-left: 1vw;
  height: 3vh;
`;
