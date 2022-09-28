import axios from "axios";
import { getRefreshToken, getAccessToken } from "./storage";
const BASE_URL = "http://3.38.209.226";
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

    config.headers["Authorization"] = `Bearer ${accessToken}`;
    config.headers["Refresh-Token"] = `${refreshToken}`;
    return config;
  }
  // function (error) {
  //   // Do something with request error
  //   return Promise.reject(error);
  // }
);

api.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공

    return response;
  }
  // function (error) {
  //   // 오류 응답을 처리

  //   return Promise.reject(error);
  // }
);
export const AccountAPI = {
  goolgeLogin: code => api.get(`/login/oauth2/code/google?code=${code}`),
  kakaoLogin: code => api.get(`/api/member/login/kakao?code=${code}`),
  logout: () => api.post("/api/auth/member/logout"),
};

export const RoadmapAPI = {
  getStack: () => api.get("/api/roadmap/title"),
  getCategory: titleId => api.get(`/api/roadmap/category/${titleId}`),
  getContent: data =>
    api.get(`/api/roadmap/${data.title}/${data.id}?page=${data.page}&size=6`),
  postContent: (choseCategory, data) =>
    api.put(`/api/roadmap/${choseCategory.title}/${choseCategory.id}`, data),
};

export const CommentAPI = {
  addcomment: data => api.post(`api/auth/comment`, data),
  deletecomment: id => api.delete(`api/auth/comment/${id}`),
};

export const LikeAPI = {
  togglelike: data => api.post(`api/auth/like/${data.id}`),
  getlike: data => api.get,
};
