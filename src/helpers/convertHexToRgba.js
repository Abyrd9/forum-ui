const hexRegex = /^#[0-9a-zA-Z]{6}$/;

export const convertHexToRgba = (hexCode, int = 0, opacity = 1) => {
  const multiplier = Math.abs(int) * 0.85;
  if (!hexRegex.test(hexCode)) return hexCode;
  const hex = hexCode.replace('#', '');

  const getValue = colorVal => {
    let value = colorVal;
    value =
      Math.sign(int) === -1
        ? colorVal + (255 - colorVal) * multiplier
        : colorVal * (1 - multiplier);
    value = Math.round(value);
    if (value >= 255) return 255;
    if (value <= 0) return 0;
    return value;
  };

  const RR = getValue(parseInt(hex.slice(0, 2), 16));
  const GG = getValue(parseInt(hex.slice(2, 4), 16));
  const BB = getValue(parseInt(hex.slice(4, 8), 16));

  return `rgba(${RR}, ${GG}, ${BB}, ${opacity})`;
};
