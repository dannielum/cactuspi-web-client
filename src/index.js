const setScrollingText = require('./led-matrix');

const onPageLoad = () => {
  setScrollingText();
};

global.onPageLoad = onPageLoad;
global.setScrollingText = setScrollingText;
