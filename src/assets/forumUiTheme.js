import buildColorPalette from '../helpers/buildColorPalette';

const getBrowserFontSize = () => {
  let base = '16px';
  if (window && document.body) {
    const browserFontSize = window.getComputedStyle(document.body).getPropertyValue('font-size');
    if (browserFontSize) base = browserFontSize;
  }
  return base;
};

const calc = (base, ratio, multiplier, type) => {
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

const columnAmount = 12;

const forumUiTheme = {
  colors: {
    primary: buildColorPalette('#FE5F55'),
    secondary: buildColorPalette('#84DCC6'),
    tertiary: buildColorPalette('#006989'),
    success: buildColorPalette('#9CEC5B'),
    error: buildColorPalette('#E01A4F'),
    neutral: buildColorPalette('#BEBEBE'),
    black: '#0C0C0C',
    white: '#F1F1F0',
    default: '#0C0C0C',
  },
  get font() {
    const font = {};
    const base = parseInt(getBrowserFontSize(), 10);

    for (let i = -3; i <= 4; i++) {
      const key = ((i + 4) * 100).toString();
      let size = 0;
      let height = 0;
      if (i < 0) {
        size = calc(base, 1.25, Math.abs(i), 'decrement');
        height = `${parseInt(size, 10) * 1.5}px`;
      } else if (i === 0) {
        size = calc(base);
        height = `${parseInt(size, 10) * 1.5}px`;
      } else if (i > 0) {
        size = calc(base, 1.25, Math.abs(i), 'increment');
        height = `${parseInt(size, 10) / 0.85}px`;
      }
      font[key] = { size, height };
    }
    return font;
  },
  get spacing() {
    const spacing = {};
    const base = 24;

    for (let i = -3; i <= 4; i++) {
      const key = ((i + 4) * 100).toString();
      let space = 0;
      if (i < 0) {
        space = calc(base, 1.5, Math.abs(i), 'decrement');
      } else if (i === 0) {
        space = calc(base);
      } else if (i > 0) {
        space = calc(base, 1.5, Math.abs(i), 'increment');
      }
      spacing[key] = space;
    }
    return spacing;
  },
  get zIndex() {
    const zIndex = {};
    for (let i = 0; i <= 8; i++) {
      const key = ((i + 4) * 100).toString();
      zIndex[key] = i * 1000;
    }
    return zIndex;
  },
  grid: {
    xs: {
      min: 0,
      max: 480,
      fluid: true,
      content: 320,
      columns: columnAmount,
      divider: 24,
      gutter: 24,
      prefix: 'xs',
    },
    sm: {
      min: 480,
      max: 768,
      fluid: false,
      content: 480,
      columns: columnAmount,
      divider: 24,
      gutter: 24,
      prefix: 'sm',
    },
    md: {
      min: 768,
      max: 990,
      fluid: false,
      content: 768,
      columns: columnAmount,
      divider: 32,
      gutter: 32,
      prefix: 'md',
    },
    lg: {
      min: 990,
      max: 1200,
      fluid: false,
      content: 990,
      columns: columnAmount,
      divider: 40,
      gutter: 40,
      prefix: 'lg',
    },
    xl: {
      min: 1200,
      max: Infinity,
      fluid: false,
      content: 1200,
      columns: columnAmount,
      divider: 40,
      gutter: 40,
      prefix: 'xl',
    },
  },
  get media() {
    const media = {};
    if (this) {
      const breakpoints = Object.entries(this.grid)
        .map(([key, value]) => {
          return { key, ...value };
        })
        .sort((a, b) => a.min - b.min);
      breakpoints.forEach(value => {
        const { min, max } = value;
        const query = `@media only screen and (min-width: ${min}px) and (max-width: ${max - 1}px)`;
        const queryUp = `@media only screen and (min-width: ${min}px)`;
        const queryDown = `@media only screen and (max-width: ${max}px)`;
        if (max === Infinity) {
          media[value.key] = { only: queryUp, ...value };
        } else {
          media[value.key] = { only: query, up: queryUp, down: queryDown, ...value };
        }
      });
    }
    return media;
  },
};

export default forumUiTheme;
