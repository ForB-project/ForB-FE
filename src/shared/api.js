import axios from "axios";
import {
  getRefreshToken,
  getAccessToken,
  setResult,
  removeAccessToken,
  removeQuizResult,
  removeRefreshToken,
  removeUserName,
} from "./storage";
import { useNavigate } from "react-router-dom";
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
      config.headers["Authorization"] = `Bearer ${accessToken}`;
      config.headers["Refresh-Token"] = `${refreshToken}`;

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
      localStorage.setItem("expiration", true);
      // window.location.reload();
    }
  }
);
export const AccountAPI = {
  goolgeLogin: code => api.get(`/login/oauth2/code/google?code=${code}`),
  kakaoLogin: code => api.get(`/api/member/login/kakao?code=${code}`),
  logout: () => api.post("/api/auth/member/logout"),
};

export const RoadmapAPI = {
  getStack: () => api.get("/api/roadmap/title"),
  getCategory: titleId => api.get(`/api/roadmap/category/${titleId}`),
  getContent: (data, pageParam, getSort) =>
    api.get(
      `/api/roadmap/${data.title}/${data.id}?page=${pageParam}&size=7&sortBy=${getSort}`
    ),
  postContent: (choseCategory, data) =>
    api.put(`/api/roadmap/${choseCategory.title}/${choseCategory.id}`, data),
};

export const ContentAPI = {
  getContent: keyword => api.get(`/api/roadmap/search?keyword=${keyword}`),
  getMyPage: (Id, pageParam) =>
    api.get(`api/myroadmap/${Id}?page=${pageParam}&size=7`),
  deleteContent: Id => api.delete(`/api/myroadmap/${Id}`),
};

export const CommunityContentAPI = {
  getAllContent: pageParam => api.get(`/api/post?page=${pageParam}&size=6`),
  getCommunityContent: id => api.get(`api/post/${id}`),
  postCommunityContent: data => api.post(`api/auth/post`, data),
  deleteCommunityContent: id => api.delete(`/api/auth/post/${id}`),
  petchCommunityContent: (id, data) => api.put(`/api/auth/post/${id}`, data),
  getmyCommunity: pageParam =>
    api.get(`/api/myroadmap/post?page=${pageParam}&size=7`),
  getLikeCommunity: pageParam =>
    api.get(`/api/myroadmap/likePost?page=${pageParam}&size=7`),
  likeCommunityContent: postId => api.post(`/api/auth/post/like/${postId}`),
  searchContent: (keyword, pageParam) =>
    api.get(`/api/post/search?keyword=${keyword}&page=${pageParam}&size=6`),
};
export const CommentAPI = {
  getcommnet: (postId, pageParam) =>
    api.get(`/api/comment/${postId}?page=${pageParam}&size=6`),
  addcomment: (postId, data) => api.post(`/api/auth/comment/${postId}`, data),
  deletecomment: commentId => api.delete(`/api/auth/comment/${commentId}`),
  modifyComment: (commentId, data) =>
    api.put(`/api/auth/comment/${commentId}`, data),
};

export const LikeAPI = {
  togglelike: contentId => api.post(`/api/roadmap/heart/${contentId}`),
};

export const QuizResultAPI = {
  postResult: data => api.post(`/api/test/result`, data),
};
export const MessageAPI = {
  joinroom: targetMemberId => api.get(`/api/roadmap/${targetMemberId}/chat`),
};
