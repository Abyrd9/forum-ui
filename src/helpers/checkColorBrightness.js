import chroma from 'chroma-js';

const isDark = (color, threshold = 0.4) => {
  return chroma.valid(color) && chroma(color).luminance() < threshold;
};

const isLight = (color, threshold = 0.4) => {
  return chroma.valid(color) && chroma(color).luminance() > threshold;
};

const isReadableLight = color => {
  return chroma.valid(color) && chroma.contrast('#FFFFFF', color) > 4.5;
};

const isReadableDark = color => {
  return chroma.valid(color) && chroma.contrast('#0C0C0C', color) > 4.5;
};

const checkColorBrightness = {};
checkColorBrightness.isDark = isDark;
checkColorBrightness.isLight = isLight;
checkColorBrightness.isReadableLight = isReadableLight;
checkColorBrightness.isReadableDark = isReadableDark;

export default checkColorBrightness;
