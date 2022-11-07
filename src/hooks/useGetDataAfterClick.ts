import { useQuery } from "react-query";
import { ContentAPI } from "../shared/api";
const getcontent = async (keyword: string) => {
  if (keyword === "") {
    return null;
  } else {
    const res = await ContentAPI.getContent(keyword);
    return res;
  }
};

export const useGetDataAfterClick = (keyword: string) =>
  useQuery(["SearchContentList", keyword], () => getcontent(keyword));
