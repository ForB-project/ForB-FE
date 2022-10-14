import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ContentCommunity } from "./index";
import { CommunityContentAPI } from "../../shared/api";
import { useQuery, useQueryClient } from "react-query";
import * as S from "./styeld";
import Pagenation from "./Pagenation";

const BodyCommunity = ({ title, author, stack }) => {
  const [pageParam, setPageParam] = useState(1);
  const getAllCommunity = async pageParam => {
    const res = await CommunityContentAPI.getAllContent(pageParam);
    return res.data.data;
  };
  const queryClient = useQueryClient();
  const CommunityQuery = useQuery(
    ["CommnunityContent", pageParam],
    () => getAllCommunity(pageParam),
    { keepPreviousData: true }
  );
  // 데이터 미리가지고 오기
  useEffect(() => {
    if (pageParam < CommunityQuery.data?.postCount / 10 + 1) {
      const nextPage = pageParam + 1;
      queryClient.prefetchQuery(["CommnunityContent", nextPage], () =>
        getAllCommunity(nextPage)
      );
    }
  }, [pageParam, queryClient]);

  return (
    <>
      <S.Body>
        {CommunityQuery.data?.postList?.map(x => (
          <ContentCommunity key={x.id} data={x} querykey={pageParam} />
        ))}
      </S.Body>
      <S.Lower>
        <Pagenation
          postCount={CommunityQuery.data?.postCount}
          setPageParam={setPageParam}
        />
      </S.Lower>
    </>
  );
};

export default BodyCommunity;
