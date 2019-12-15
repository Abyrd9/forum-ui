import chroma from 'chroma-js';

const buildColorPalette = hex => {
  // const shades = {};
  if (!chroma.valid(hex)) return { inProgress: true };

  const dark = chroma
    .scale([hex, chroma(hex).darken(2.5)])
    .colors(5)
    .slice(1);
  const light = chroma
    .scale([hex, chroma(hex).brighten(2)])
    .colors(4)
    .slice(1)
    .reverse();

  return [...light, hex, ...dark].reduce((acc, color, index) => {
    const key = (index + 1) * 100;
    acc[key] = color;
    return acc;
  }, {});
};

export default buildColorPalette;
