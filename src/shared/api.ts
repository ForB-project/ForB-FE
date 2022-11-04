import axios from "axios";
import {
  getRefreshToken,
  getAccessToken,
  removeAccessToken,
  removeQuizResult,
  removeRefreshToken,
  removeUserName,
} from "./storage";

const BASE_URL = process.env.REACT_APP_API;

const ClearStorage = () => {
  removeAccessToken();
  removeQuizResult();
  removeRefreshToken();
  removeUserName();
};
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  config => {
    const refreshToken = getRefreshToken();
    const preaccessToken = getAccessToken();
    const accessToken = preaccessToken?.split(" ")[1];
    if (!refreshToken) {
      return config;
    } else {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
        "Refresh-Token": `${refreshToken}`,
      };

      return config;
    }
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공

    return response;
  },
  function (error) {
    // 오류 응답을 처리

    if (error.response.data?.success === false) {
      ClearStorage();
      localStorage.setItem("expiration", "true");
      // window.location.reload();
    }
  }
);
export const AccountAPI = {
  goolgeLogin: (code: string) =>
    api.get(`/login/oauth2/code/google?code=${code}`),
  kakaoLogin: (code: string) => api.get(`/api/member/login/kakao?code=${code}`),
  logout: () => api.post("/api/auth/member/logout"),
};

export const RoadmapAPI = {
  getStack: () => api.get("/api/roadmap/title"),
  getCategory: (titleId: number) => api.get(`/api/roadmap/category/${titleId}`),
  getContent: (
    data: { title: string; id: number },
    pageParam: number,
    getSort: string
  ) =>
    api.get(
      `/api/roadmap/${data.title}/${data.id}?page=${pageParam}&size=7&sortBy=${getSort}`
    ),
  postContent: (choseCategory: { title: string; id: number }, data: FormData) =>
    api.put(`/api/roadmap/${choseCategory.title}/${choseCategory.id}`, data),
};

export const ContentAPI = {
  getContent: (keyword: string) =>
    api.get(`/api/roadmap/search?keyword=${keyword}`),
  getMyPage: (Id: number, pageParam: number) =>
    api.get(`api/myroadmap/${Id}?page=${pageParam}&size=7`),
  deleteContent: (Id: number) => api.delete(`/api/myroadmap/${Id}`),
};

export const CommunityContentAPI = {
  getAllContent: (pageParam: number) =>
    api.get(`/api/post?page=${pageParam}&size=6`),
  getCommunityContent: (id: number) => api.get(`api/post/${id}`),
  postCommunityContent: (data: FormData) => api.post(`api/auth/post`, data),
  deleteCommunityContent: (id: number) => api.delete(`/api/auth/post/${id}`),
  petchCommunityContent: (id: number, data: FormData) =>
    api.put(`/api/auth/post/${id}`, data),
  getmyCommunity: (pageParam: number) =>
    api.get(`/api/myroadmap/post?page=${pageParam}&size=7`),
  getLikeCommunity: (pageParam: number) =>
    api.get(`/api/myroadmap/likePost?page=${pageParam}&size=7`),
  likeCommunityContent: (postId: number) =>
    api.post(`/api/auth/post/like/${postId}`),
  searchContent: (keyword: string, pageParam: number) =>
    api.get(`/api/post/search?keyword=${keyword}&page=${pageParam}&size=6`),
};
export const CommentAPI = {
  getcommnet: (postId: number, pageParam: number) =>
    api.get(`/api/comment/${postId}?page=${pageParam}&size=6`),
  addcomment: (postId: number, data: string) =>
    api.post(`/api/auth/comment/${postId}`, data),
  deletecomment: (commentId: number) =>
    api.delete(`/api/auth/comment/${commentId}`),
  modifyComment: (commentId: number, data: string) =>
    api.put(`/api/auth/comment/${commentId}`, data),
};

export const LikeAPI = {
  togglelike: (contentId: number) =>
    api.post(`/api/roadmap/heart/${contentId}`),
};

export const QuizResultAPI = {
  // postResult: data => api.post(`/api/test/result`, data),
  repostResult: () => api.get(`/api/member/stackType`),
};
export const MessageAPI = {
  joinroom: (targetMemberId: number) =>
    api.get(`/api/roadmap/${targetMemberId}/chat`),
  deleteList: (ListId: number) => api.delete(`/api/chat/${ListId}`),
};
