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

const colors = [{ title: 'primary', color: '#FE5F55' }, { title: 'secondary', color: '#84DCC6' }];
export const INITIAL_COLORS = colors.reduce((acc, { title = '', color = '' }, index) => {
  const key = `${generateUniqueKey([])}${index}`;
  acc[key] = {
    title,
    color,
    palette: buildColorPalette(color),
  };
  return acc;
}, {});
