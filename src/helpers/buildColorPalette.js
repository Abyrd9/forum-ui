import chroma from 'chroma-js';

const buildColorPalette = hex => {
  // const shades = {};
  if (!chroma.valid(hex)) return { inProgress: true };

  const dark = chroma
    .bezier([hex, '#000000'])
    .scale()
    .colors(6)
    .slice(1, 5);
  const light = chroma
    .bezier([hex, '#FFFFFF'])
    .scale()
    .colors(5)
    .slice(1, 4)
    .reverse();

  return [...light, hex, ...dark].reduce((acc, color, index) => {
    const key = (index + 1) * 100;
    acc[key] = color;
    return acc;
  }, {});
};

export default buildColorPalette;
