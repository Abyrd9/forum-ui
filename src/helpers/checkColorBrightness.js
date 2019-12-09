import chroma from 'chroma-js';

const checkColorBrightness = color => {
  return chroma.valid(color) && chroma(color).luminance() > 0.5 ? 'light' : 'dark';
};

export default checkColorBrightness;
