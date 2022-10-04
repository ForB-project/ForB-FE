import { useQuery } from "react-query";
import { ContentAPI } from "../shared/api";
const getcontent = async keyword => {
  if (keyword === "") {
    return null;
  } else {
    const res = await ContentAPI.getContent(keyword);
    return res;
  }
};

export const useGetDataAfterClick = keyword =>
  useQuery(["SearchContentList", keyword], () => getcontent(keyword));
