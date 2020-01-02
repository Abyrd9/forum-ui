import chroma from 'chroma-js';

const isDark = (color, threshold = 0.4) => {
  return chroma.valid(color) && chroma(color).luminance() < threshold;
};

const isLight = (color, threshold = 0.4) => {
  return chroma.valid(color) && chroma(color).luminance() > threshold;
};

const checkColorBrightness = {};
checkColorBrightness.isDark = isDark;
checkColorBrightness.isLight = isLight;

export default checkColorBrightness;
