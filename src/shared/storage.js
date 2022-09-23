export const setAccessToken = Token => {
  return localStorage.setItem("access_token", Token);
};

export const getAccessToken = () => {
  return localStorage.getItem("access_token");
};
export const removeAccessToken = () => {
  return localStorage.removeItem("access_token");
};

export const setRefreshToken = Token => {
  return localStorage.setItem("refresh_token", Token);
};

export const getRefreshToken = () => {
  return localStorage.getItem("refresh_token");
};

export const removeRefreshToken = () => {
  return localStorage.removeItem("refresh_token");
};

export const setUserName = Token => {
  return localStorage.setItem("username", Token);
};

export const getUserName = () => {
  return localStorage.getItem("username");
};
export const removeUserName = () => {
  return localStorage.removeItem("username");
};
