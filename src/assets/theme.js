import { createGlobalStyle } from 'styled-components';
import generatePalette from '../helpers/generatePalette';

const calculate = (base, ratio, multiplier, type) => {
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

const fontBase = 16;
const fontRatio = 1.25;

const spacingBase = 24;
const spacingRatio = 1.5;

const columnAmount = 12;

export const theme = {
  colors: {
    primary: generatePalette('#84DCC6'),
    secondary: generatePalette('#FE5F55'),
    tertiary: generatePalette('#006989'),
    success: generatePalette('#9CEC5B'),
    error: generatePalette('#E01A4F'),
    neutral: generatePalette('#BEBEBE'),
    black: '#0C0C0C',
    white: '#F1F1F0',
    default: '#0C0C0C',
  },
  font: {
    100: calculate(fontBase, fontRatio, 3, 'decrement'),
    200: calculate(fontBase, fontRatio, 2, 'decrement'),
    300: calculate(fontBase, fontRatio, 1, 'decrement'),
    400: calculate(fontBase),
    500: calculate(fontBase, fontRatio, 1, 'increment'),
    600: calculate(fontBase, fontRatio, 2, 'increment'),
    700: calculate(fontBase, fontRatio, 3, 'increment'),
    800: calculate(fontBase, fontRatio, 4, 'increment'),
    default: calculate(fontBase),
  },
  spacing: {
    100: calculate(spacingBase, spacingRatio, 3, 'decrement'),
    200: calculate(spacingBase, spacingRatio, 2, 'decrement'),
    300: calculate(spacingBase, spacingRatio, 1, 'decrement'),
    400: calculate(spacingBase),
    500: calculate(spacingBase, spacingRatio, 1, 'increment'),
    600: calculate(spacingBase, spacingRatio, 2, 'increment'),
    700: calculate(spacingBase, spacingRatio, 3, 'increment'),
    800: calculate(spacingBase, spacingRatio, 4, 'increment'),
    default: calculate(spacingBase),
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

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: ${theme.font.md};
    font-family: 'Josefin Sans', sans-serif;
    vertical-align: baseline;
  }
  h1 {
    font-size: ${theme.font.xxxl};
  }
  h2 {
    font-size: ${theme.font.xxl};
  }
  h3 {
    font-size: ${theme.font.xl};
  }
  h4 {
    font-size: ${theme.font.lg};
  }
  h5 {
    font-size: ${theme.font.md};
    text-transform: uppercase;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
