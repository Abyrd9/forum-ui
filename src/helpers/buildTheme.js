export const calculateVariation = (base, ratio, multiplier, type) => {
  let num = 0;
  switch (type) {
    case 'increment':
      num = Math.round(base * ratio ** multiplier);
      return num % 2 === 0 ? `${num}px` : `${num + 1}px`;
    case 'decrement':
      num = Math.round(base / ratio ** multiplier);
      return num % 2 === 0 ? `${num}px` : `${num + 1}px`;
    default:
      return `${base}px`;
  }
};

export const getBrowserFontSize = () => {
  let base = '16px';
  if (window && document.body) {
    const browserFontSize = window.getComputedStyle(document.body).getPropertyValue('font-size');
    if (browserFontSize) base = browserFontSize;
  }
  return base;
};

export const getSizingVariations = (baseSize, ratio = { positive: 1.25, negative: 1.25 }) => {
  const object = {};
  const base = baseSize;
  for (let i = -3; i <= 4; i++) {
    const key = ((i + 4) * 100).toString();
    let value = 0;
    if (i < 0) {
      value = calculateVariation(base, ratio.negative, Math.abs(i), 'decrement');
    } else if (i === 0) {
      value = calculateVariation(base);
    } else if (i > 0) {
      value = calculateVariation(base, ratio.positive, Math.abs(i), 'increment');
    }
    object[key] = value;
  }
  return object;
};
