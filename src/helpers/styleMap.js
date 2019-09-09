/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
const styleMap = obj => props => {
  const propsArr = Object.entries(props);
  const objArr = Object.entries(obj);
  let value = '';

  const valRegex = /^[^ ]+$/;
  const isBool = val => typeof val === 'boolean';
  const isNum = val => typeof val === 'number';
  const isVal = val => typeof val === 'string' && valRegex.test(val);
  const isObj = val => val && !Array.isArray(val) && typeof val === 'object';

  const filteredProps = propsArr.reduce((acc, [key, val]) => {
    if (isBool(val) || isNum(val) || isVal(val)) acc.push([key, val]);
    return acc;
  }, []);

  const styleMapArr = objArr.reduce((acc, [key, val]) => {
    if (isNum(val) || isVal(val) || isObj(val)) acc.push([key, val]);
    return acc;
  }, []);

  value = styleMapArr.find(([key, val]) => (key === 'default' ? val : ''));

  value = filteredProps.reduce((acc, [key, val]) => {
    const map = Object.fromEntries(styleMapArr);
    if (map.hasOwnProperty(key) && val) {
      if (isObj(map[key]) && map[key].hasOwnProperty(val)) {
        acc = map[key][val];
      } else {
        acc = map[key];
      }
      return acc;
    }
    return acc;
  }, value[1]);

  return value;
};

export default styleMap;
