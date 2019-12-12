import chroma from 'chroma-js';

const isDark = color => {
  return chroma.valid(color) && chroma(color).luminance() < 0.4;
};

const isLight = color => {
  return chroma.valid(color) && chroma(color).luminance() > 0.4;
};

const checkColorBrightness = {};
checkColorBrightness.isDark = isDark;
checkColorBrightness.isLight = isLight;

export default checkColorBrightness;
