import HomeIcon from '../components/Icons/HomeIcon';
import GridIcon from '../components/Icons/GridIcon';
import ComponentsIcon from '../components/Icons/ComponentsIcon';
import ThemeIcon from '../components/Icons/ThemeIcon';
import generateUniqueKey from '../helpers/generateUniqueKey';
import buildColorPalette from '../helpers/buildColorPalette';

export const NAV_LIST = [
  { image: HomeIcon, name: 'Home' },
  { image: GridIcon, name: 'Forum Grid' },
  { image: ComponentsIcon, name: 'Components' },
  { image: ThemeIcon, name: 'Theme' },
];

export const GOOGLE_FONTS_API_KEY = 'AIzaSyAP4JRmnXRwmd21aGgTmcfwjNv246Y5Cu8';

const colors = [
  { title: 'primary', color: '#FE5F55', isFlat: false },
  { title: 'secondary', color: '#84DCC6', isFlat: false },
  { title: 'neutral', color: '#BEBEBE', isFlat: false },
  { title: 'warning', color: '#FDE74C', isFlat: false },
  { title: 'success', color: '#A5D836', isFlat: false },
  { title: 'error', color: '#E50F00', isFlat: false },
  { title: 'black', color: '#0C0C0C', isFlat: true },
  { title: 'white', color: '#FFFFFF', isFlat: true },
];

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
  {},
);
