/* eslint-disable no-plusplus */

const generateUniqueKey = (arr = []) => {
  const keyList = arr.length > 0 ? arr.filter(item => item.key) : [];

  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const generator = () => {
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };

  let key = generator();
  while (keyList.includes(key)) {
    key = generator();
  }

  return key;
};

export default generateUniqueKey;
