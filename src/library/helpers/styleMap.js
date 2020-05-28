/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
const styleMap = obj => props => {
  const propsArr = Object.entries(props);
  const objArr = Object.entries(obj);
  let value = "";

  const valRegex = /^[^]+$/;
  const isBool = val => typeof val === "boolean";
  const isNum = val => typeof val === "number";
  const isVal = val => typeof val === "string" && valRegex.test(val);
  const isObj = val => val && !Array.isArray(val) && typeof val === "object";

  // get only prop values that are bools, strings, or numbers
  const filteredProps = propsArr.reduce((acc, [key, val]) => {
    if (isBool(val) || isNum(val) || isVal(val)) acc.push([key, val]);
    return acc;
  }, []);

  const styleMapArray = objArr.reduce((acc, [key, val]) => {
    let mapValue = val;
    if (
      Array.isArray(mapValue) &&
      mapValue.every(item => typeof item === "string")
    ) {
      mapValue = mapValue.join("");
    }
    if (isNum(mapValue) || isVal(mapValue) || isObj(mapValue))
      acc.push([key, mapValue]);
    return acc;
  }, []);
  // Set the value as whatever default is, this will be the default acc value
  value = styleMapArray.find(([key]) => key === "default");

  // Loop through the filtered props. If the style map object has the same
  // key as one of the props and a prop value exists, then check style map value.
  // If the style map value is an object, and that object has a key that is the same
  // value as the prop value, then use that style maps key/value.
  value = filteredProps.reduce((acc, [key, val]) => {
    const map = Object.fromEntries(styleMapArray);
    if (map.hasOwnProperty(key) && val) {
      if (isObj(map[key]) && map[key].hasOwnProperty(val)) {
        acc = map[key][val];
      } else {
        acc = map[key];
      }
    }
    return acc;
  }, value[1]);

  return value;
};

export default styleMap;
