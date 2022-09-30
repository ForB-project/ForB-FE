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

export const setResult = response =>{
  const id = response.data.data[0].id;
  const title = response.data.data[0].title;
  const description1 = response.data.data[0].description1;
  const description2 = response.data.data[0].description2;
  const stackType = response.data.data[0].stackType;

  return(
    localStorage.setItem('resultId',id),
    localStorage.setItem('resultTitle',title),
    localStorage.setItem('resultDescription1',description1),
    localStorage.setItem('resultDescription2',description2),
    localStorage.setItem('resultStackType',stackType)
  );
};

export const removeResult = () =>{
  return(
    localStorage.removeItem('resultId'),
    localStorage.removeItem('resultTitle'),
    localStorage.removeItem('resultDescription1'),
    localStorage.removeItem('resultDescription2'),
    localStorage.removeItem('resultStackType')
  );
};

export const setQuizResult = result =>{
  const type =result[0];
  const answer =result[1];
  return(
    localStorage.setItem('answer',answer),
    localStorage.setItem('type',type)
  );
};
