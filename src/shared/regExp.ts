export const idCheck = (id: string) => {
  let regExp = /^[a-zA-Z0-9]{4,12}$/;
  // 대문자 포함 4글자 이상 12글자 이하
  return regExp.test(id);
};

export const nickCheck = (nick: string) => {
  let regExp = /^[0-9a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  return regExp.test(nick);
};

export const emailCheck = (email: string) => {
  let _reg =
    /^(https?):\/\/([^:\/\s]+)(:([^\/]*))?((\/[^\s/\/]+)*)?\/?([^#\s\?]*)(\?([^#\s]*))?(#(\w*))?$/;

  return _reg.test(email);
};
