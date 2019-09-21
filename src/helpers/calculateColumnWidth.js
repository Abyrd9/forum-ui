const calculateColumnWidth = (dividend, divisor = 12) => {
  const decimal = dividend / divisor;
  const percent = decimal.toFixed(5) * 100;
  return `${percent}%`;
};

export default calculateColumnWidth;
