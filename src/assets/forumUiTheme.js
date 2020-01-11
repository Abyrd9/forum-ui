import buildColorPalette from '../helpers/buildColorPalette';
import { getBrowserFontSize, getSizingVariations } from '../helpers/buildTheme';

const columnAmount = 12;

const forumUiTheme = {
  colors: {
    primary: buildColorPalette('#FE5F55'),
    secondary: buildColorPalette('#84DCC6'),
    neutral: buildColorPalette('#BEBEBE'),
    warning: buildColorPalette('#FDE74C'),
    success: buildColorPalette('#A5D836'),
    error: buildColorPalette('#E50F00'),
    black: '#0C0C0C',
    white: '#FFFFFF',
    default: '#0C0C0C',
  },
  get font() {
    const base = parseInt(getBrowserFontSize(), 10);
    return getSizingVariations(base, { upper: 1, lower: 3 });
  },
  get spacing() {
    return getSizingVariations(24, { upper: 6, lower: 1 });
  },
  get zIndex() {
    const zIndex = {};
    for (let i = 0; i <= 8; i++) {
      const key = (i * 100).toString();
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
