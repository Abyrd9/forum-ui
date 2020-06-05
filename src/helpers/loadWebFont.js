import WebFont from "webfontloader";

const wait = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

const webFont = config =>
  new Promise((resolve, reject) => {
    WebFont.load({
      ...config,
      timeout: 2000,
      classes: false,
      fontinactive: () => {
        reject();
      },
      fontactive: () => {
        resolve();
      }
    });
  });

const loadWebFont = (config, callback = () => {}) => {
  Promise.all([wait(), webFont(config)])
    .then(() => callback("resolved"))
    .catch(() => {
      console.error("Error Loading web Font");
      callback("errored");
    });
};

export default loadWebFont;
