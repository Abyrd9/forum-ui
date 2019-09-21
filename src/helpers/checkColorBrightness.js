/* eslint-disable prefer-destructuring */
/* eslint-disable no-bitwise */
const checkColorBrightness = color => {
  let newColor = color;
  let r;
  let g;
  let b;
  if (/^rgb/.test(newColor)) {
    newColor = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    if (!newColor) return '';
    r = newColor[1];
    g = newColor[2];
    b = newColor[3];
  } else {
    newColor = +`0x${color.slice(1).replace(color.length < 5 && /./g, '$&$&')}`;
    r = newColor >> 16;
    g = (newColor >> 8) & 255;
    b = newColor & 255;
  }
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  if (hsp > 165) {
    return 'light';
  }
  return 'dark';
};

export default checkColorBrightness;
