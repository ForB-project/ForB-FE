import styled from "styled-components";

export const Body = styled.div`
  /* border: 1px dashed black; */

  border-radius: 30px;
  background-color: black;
  opacity: 0.95;
  transition: 0.5s;

  color: white;
  font-size: 3vh;
  font-family: "neodgm";

  margin: auto;
  width: 60vw;
  min-height: 50vh;
  padding-top: 1vh;

  text-align: center;
`;

export const Line = styled.div`
  /* border: 1px dashed purple; */
  display: flex;
  justify-content: space-around;
  margin-top: 3vh;
  margin-bottom: 3vh;
  padding-left: 2vw;
  padding-right: 2vw;
  min-height: 4vh;
  opacity: 0.9;

  cursor: pointer;
  &:hover {
    div {
      background-color: white;
      color: black;
    }
  }
`;
export const Title = styled.div`
  /* border: 1px dashed yellow; */

  border-radius: 5px;
  background-color: #10141b;

  width: 45vw;
  max-height: 6vh;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 1vw;
  text-align: left;
`;
export const Author = styled.div`
  /* border: 1px dashed pink; */

  border-radius: 5px;
  background-color: #10141b;

  width: 10vw;
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

export const Lower = styled.div`
  text-align: center;

  margin: 1vh;
  padding-top: 1vh;
`;
export const Center = styled.div`
  border-radius: 10px;
  border: 8px dashed black;
  background-color: #10141b;
  opacity: 0.95;

  margin: 1vw;
  display: inline-block;
  width: 20vw;

  font-family: "neodgm";
`;
export const WriteButton = styled.button`
  border: none;

  color: gray;
  font-size: 4vmin;
  font-family: "neodgm";

  width: 100%;
  height: 5vh;
  background: none;

  cursor: pointer;
  &:hover {
    font-size: 4.2vmin;
    color: white;
    opacity: 1;
  }
`;
