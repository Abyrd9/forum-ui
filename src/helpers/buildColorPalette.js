import chroma from 'chroma-js';

const buildColorPalette = hex => {
  const shades = {};
  if (!chroma.valid(hex)) return { inProgress: true };
  for (let i = -3; i <= 4; i++) {
    const key = ((i + 4) * 100).toString();
    let value;
    if (i < 0) value = chroma(hex).brighten(Math.abs(i) * 0.5);
    if (i === 0) value = hex;
    if (i >= 0) value = chroma(hex).darken(Math.abs(i) * 0.5);
    shades[key] = value;
  }
  return shades;
};

export default buildColorPalette;
