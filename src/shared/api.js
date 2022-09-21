import axios from "axios";
import { getRefreshToken, getAccessToken } from "./Cookie";
const BASE_URL = "http://54.180.89.177";
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Comment-Type": "application/json",
  },
  withCredentials: true,
});

axios.interceptors.request.use(
  function (config) {
    const refreshToken = getRefreshToken();
    const accessToken = getAccessToken();
    config.headers["Authorization"] = `${accessToken}`;
    config.headers["Refresh-Token"] = `${refreshToken}`;
    return config;
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

    return Promise.reject(error);
  }
);
export const AccountAPI = {
  goolgeLogin: code => api.get(`/login/oauth2/code/google?code=${code}`),
  kakaoLogin: () => api.get(`/user/kakao/callback`),
  logout: () => api.get("/api/auth/user/logout"),
};

export const ProflieAPI = {
  myprofile: () => api.get("/api/auth/user/profile"),
  otherprofile: id => api.get(`/api/auth/user/profile/${id}`),
  modify: data => api.put("/api/auth/user/profile", data),
};

export const TwitAPI = {
  addtwit: data => api.post(`/api/auth/twit`, data),
  gettwit: () => api.get(`/api/twit`),
  getonetwit: id => api.get(`/api/twit/${id}`),
  deletetwit: id => api.delete(`/api/auth/twit/${id}`),
};

export const CommentAPI = {
  addcomment: data => api.post(`api/auth/comment`, data),
  deletecomment: id => api.delete(`api/auth/comment/${id}`),
};

export const LikeAPI = {
  togglelike: data => api.post(`api/auth/like/${data.id}`),
  getlike: data => api.get,
};
