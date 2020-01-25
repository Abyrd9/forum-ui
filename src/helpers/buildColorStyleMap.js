import chroma from 'chroma-js';

const buildColorStyleMap = type => props => {
  const { theme = {} } = props;
  if (theme.colors) {
    const colorKeys = Object.keys(theme.colors);
    const colorProp = Object.entries(props).find(([key]) => colorKeys.includes(key));
    if (colorProp && typeof colorProp[1] === 'boolean') {
      const value =
        typeof theme.colors[colorProp[0]] === 'string'
          ? theme.colors[colorProp[0]]
          : theme.colors[colorProp[0]][400];
      if (type === 'lighten') {
        chroma(value).brighten(1);
      } else if (type === 'darken') {
        chroma(value).darken(1);
      } else {
        return value;
      }
    }
    if (colorProp && /^[1-8]00$/g.test(colorProp[1])) {
      const value = theme.colors[colorProp[0]][colorProp[1]];
      if (type === 'lighten') {
        chroma(value).brighten(1);
      } else if (type === 'darken') {
        chroma(value).darken(1);
      } else {
        return value;
      }
    }
    return '#959595';
  }
  return null;
};

export default buildColorStyleMap;
