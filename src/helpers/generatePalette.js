import { changeColor } from './changeColor';

const hexRegex = /^#[0-9a-zA-Z]{6}$/;

const generatePalette = hex => {
  const shades = {};
  if (!hexRegex.test(hex)) return shades;
  for (let i = -3; i <= 4; i++) {
    const key = ((i + 4) * 100).toString();
    let value;
    if (i < 0) value = changeColor(hex, i * 0.3);
    if (i >= 0) value = changeColor(hex, Math.abs(i) * 0.2);
    shades[key] = value;
  }
  return shades;
};

export default generatePalette;
