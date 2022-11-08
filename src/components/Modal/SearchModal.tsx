import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ContentAPI } from "../../shared/api";
import SearchModalContent from "./SearchModalContent";
import { useQuery } from "react-query";
import { useGetDataAfterClick } from "../../hooks/useGetDataAfterClick";

interface Idata {
  thumbnail: string;
  link: string;
  heartCheck: boolean;
  id: number;
  title: string;
  desc: string;
}
function SearchModal(props: { closeSearch: () => void }) {
  function closeSearch() {
    props.closeSearch();
  }

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY) * -1);
    };
  }, []);
  const inputRef = useRef<HTMLInputElement>(null);
  const keyword = inputRef.current?.value;
  const getContentList = useGetDataAfterClick(keyword!);
  const SearchList = getContentList.data?.data?.data;
  //검색결과 컨텐츠 가져오기
  const getContent = () => {
    getContentList.refetch();
  };

  return (
    <ModalStyled>
      <div className="modalBody" onClick={e => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeSearch}>
          Close
        </button>
        <div className="searchBar">
          <input placeholder="찾고 싶은걸 검색해보세요" ref={inputRef} />
          <button
            onClick={() => {
              getContent();
            }}
          >
            검색
          </button>
        </div>
        <div className="ContentBody">
          {SearchList?.map((x: Idata) => {
            return <SearchModalContent key={x.id} data={x} keyword={keyword} />;
          })}
        </div>
      </div>
    </ModalStyled>
  );
}

export default SearchModal;

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;
  font-family: "neodgm";
  .modalBody {
    position: absolute;
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 70%;
    height: 80%;
    padding: 30px 30px 30px 30px;
    z-index: 12;
    text-align: center;
    background-color: rgb(245, 245, 245);
    border-radius: 20px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  }
  .ContentBody {
    margin-top: 4%;
    width: 90%;
    height: 80%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    background-color: rgba(00, 00, 000, 0.85);
    border-radius: 20px;
    align-items: center;
    overflow: auto;
  }
  .searchBar {
    margin-top: 1%;
    display: flex;
    width: 100%;
    height: 7%;
    align-items: center;
    justify-content: center;

    input {
      width: 50%;
      height: 100%;
    }
    button {
      width: 10%;
      height: 100%;
      margin-left: 2%;
    }
  }
  #modalCloseBtn {
    position: absolute;
    top: 5%;
    z-index: 11;
    right: 28px;
    border: 1px solid rgb(220, 220, 220);
    width: 10%;
    height: 7%;
    border-radius: 20%/60%;
    color: rgba(0, 0, 0, 0.7);
    background-color: rgba(200, 200, 200, 0.3);
    font-size: 1rem;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
      background-color: rgb(0, 0, 0);
      color: white;
      cursor: pointer;
    }
  }
`;
