import generateUniqueKey from '../helpers/generateUniqueKey';
import buildColorPalette from '../helpers/buildColorPalette';

export const GOOGLE_FONTS_API_KEY = 'AIzaSyAP4JRmnXRwmd21aGgTmcfwjNv246Y5Cu8';

const colors = [
  { title: 'primary', color: '#FE5F55', isFlat: false, order: 1 },
  { title: 'secondary', color: '#84DCC6', isFlat: false, order: 2 },
  { title: 'neutral', color: '#BEBEBE', isFlat: false, order: 3 },
  { title: 'warning', color: '#FDE74C', isFlat: true, order: 4 },
  { title: 'success', color: '#A5D836', isFlat: true, order: 5 },
  { title: 'error', color: '#E50F00', isFlat: true, order: 6 },
];

export const INITIAL_CREATOR = {
  title: 'NewColor',
  color: '',
  isFlat: false,
  palette: { inProgress: true },
};

export const INITIAL_COLORS = colors.reduce(
  (acc, { title = '', color = '', isFlat = false, order }, index) => {
    const colorId = `${generateUniqueKey([])}${index}`;
    acc[colorId] = {
      title,
      color,
      palette: isFlat ? { 400: color } : buildColorPalette(color),
      order,
    };
    return acc;
  },
  { creator: INITIAL_CREATOR },
);

export const INITIAL_TYPOGRAPHY_CONFIG = {
  name: 'Josefin Sans',
  baseSize: 16,
  upperRatio: 1,
  lowerRatio: 1,
  family: 'Josefin Sans, sans-serif',
  variants: ['100', '300', '400', '600', '700'],
};

export const INITIAL_SPACING_CONFIG = {
  baseSize: 16,
  lowerRatio: 1,
  upperRatio: 4,
};
