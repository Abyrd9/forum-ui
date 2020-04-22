import chroma from "chroma-js";

const isDark = (color, threshold = 0.4) => {
  return chroma.valid(color) && chroma(color).luminance() < threshold;
};

const isLight = (color, threshold = 0.4) => {
  return chroma.valid(color) && chroma(color).luminance() > threshold;
};

const isReadableLight = (color, threshold = 4.5) => {
  return chroma.valid(color) && chroma.contrast("#FFFFFF", color) > threshold;
};

const isReadableDark = (color, threshold = 4.5) => {
  return chroma.valid(color) && chroma.contrast("#0C0C0C", color) > threshold;
};

const checkColorBrightness = {};
checkColorBrightness.isDark = isDark;
checkColorBrightness.isLight = isLight;
checkColorBrightness.isReadableLight = isReadableLight;
checkColorBrightness.isReadableDark = isReadableDark;

export default checkColorBrightness;
