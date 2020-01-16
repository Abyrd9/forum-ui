import {
  faHomeLg,
  faGripHorizontal,
  faPencilPaintbrush,
  faUserCircle,
} from '@fortawesome/pro-duotone-svg-icons';
import generateUniqueKey from '../helpers/generateUniqueKey';
import buildColorPalette from '../helpers/buildColorPalette';

export const NAV_LIST = [
  { icon: faHomeLg, class: 'home' },
  { icon: faGripHorizontal, class: 'grid' },
  { icon: faPencilPaintbrush, class: 'theme' },
  { icon: faUserCircle, class: 'user' },
];

export const GOOGLE_FONTS_API_KEY = 'AIzaSyAP4JRmnXRwmd21aGgTmcfwjNv246Y5Cu8';

const colors = [
  { title: 'primary', color: '#FE5F55', isFlat: false },
  { title: 'secondary', color: '#84DCC6', isFlat: false },
  { title: 'neutral', color: '#BEBEBE', isFlat: false },
  { title: 'warning', color: '#FDE74C', isFlat: true },
  { title: 'success', color: '#A5D836', isFlat: true },
  { title: 'error', color: '#E50F00', isFlat: true },
];

export const INITIAL_CREATOR = {
  title: 'NewColor',
  color: '',
  isFlat: false,
  palette: { inProgress: true },
};

export const INITIAL_COLORS = colors.reduce(
  (acc, { title = '', color = '', isFlat = false }, index) => {
    const colorId = `${generateUniqueKey([])}${index}`;
    acc[colorId] = {
      title,
      color,
      palette: isFlat ? { 400: color } : buildColorPalette(color),
    };
    return acc;
  },
  { creator: INITIAL_CREATOR },
);

export const INITIAL_TYPOGRAPHY_CONFIG = {
  name: '',
  baseSize: 16,
  upperRatio: 1,
  lowerRatio: 1,
  family: '',
  variants: [],
};

export const INITIAL_SPACING_CONFIG = {
  baseSize: 16,
  lowerRatio: 1,
  upperRatio: 4,
};
