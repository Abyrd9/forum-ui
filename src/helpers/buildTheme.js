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

const isEven = n => n % 2 === 0;

export const getUpperValues = (base, step = 1) => {
  const fontSize = parseInt(base, 10);
  let multiplier = 4;
  for (let i = 1; i <= step; i++) {
    const isOfThree = n => Number.isInteger(n / 4);
    if (isOfThree(i)) multiplier += 6;
  }

  const min = fontSize + multiplier;
  const max = (step - 1) * 12 + 32 + fontSize;

  const arr = [];
  for (let i = min; i <= max; i++) {
    if (isEven(i)) arr.push(i);
  }

  const values = [arr[0], arr[arr.length - 1]];
  arr.shift();
  arr.pop();

  const index = arr.length / 3;
  values.splice(1, 0, arr[Math.floor(index * 2)]);
  values.splice(1, 0, arr[Math.floor(index)]);

  return values;
};

export const getLowerValues = (base, step = 1) => {
  const fontSize = parseInt(base, 10);
  let multiplier = 2;
  for (let i = 1; i <= step; i++) {
    const isOfThree = n => Number.isInteger(n / 3);
    const half = multiplier < fontSize / 2;
    if (i > 3 && isOfThree(i) && half) multiplier += 2;
  }

  const max = fontSize - multiplier;
  let min = max - (step - 1 + (3 - 1)) * 2;
  min = min < 2 ? 2 : min;

  const arr = [];
  for (let i = min; i <= max; i++) {
    if (isEven(i)) arr.push(i);
  }

  const values = [arr[0], arr[arr.length - 1]];
  arr.shift();
  arr.pop();

  if (isEven(arr.length)) {
    values.splice(1, 0, arr[arr.length / 2 - 1]);
  } else {
    values.splice(1, 0, arr[Math.floor(arr.length / 2)]);
  }
  return values;
};

export const getSizingVariations = (baseSize, ratio = { upper: 1, lower: 1 }) => {
  const size = parseInt(baseSize, 10);
  const upper = parseInt(ratio.upper, 10);
  const lower = parseInt(ratio.lower, 10);
  const sizing = [...getLowerValues(size, lower), baseSize, ...getUpperValues(size, upper)].reduce(
    (acc, value, index) => {
      const key = (index + 1) * 100;
      acc[key] = `${value}px`;
      return acc;
    },
    {},
  );
  return sizing;
};
