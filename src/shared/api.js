import axios from "axios";
import { getRefreshToken, getAccessToken, setResult } from "./storage";
const BASE_URL = "https://www.sheshesh.shop";
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

    // if (response.data?.data[0].stackType) {
    //   setResult(response);
    // }

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
  getContent: (data, pageParam, getSort) =>
    api.get(
      `/api/roadmap/${data.title}/${data.id}?page=${pageParam}&size=7&sortBy=${getSort}`
    ),
  postContent: (choseCategory, data) =>
    api.put(`/api/roadmap/${choseCategory.title}/${choseCategory.id}`, data),
};

export const CommentAPI = {
  addcomment: data => api.post(`api/auth/comment`, data),
  deletecomment: id => api.delete(`api/auth/comment/${id}`),
};

export const LikeAPI = {
  togglelike: contentId => api.post(`/api/roadmap/heart/${contentId}`),
};
