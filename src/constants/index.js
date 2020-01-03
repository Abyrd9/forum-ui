import HomeIcon from '../components/Utilities/Icons/HomeIcon';
import GridIcon from '../components/Utilities/Icons/GridIcon';
import ComponentsIcon from '../components/Utilities/Icons/ComponentsIcon';
import ThemeIcon from '../components/Utilities/Icons/ThemeIcon';
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
