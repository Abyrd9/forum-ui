/* eslint-disable no-param-reassign */

// Pass in an object with a key/value pair where the value has a
// sortOrder key, this will order them correctly if one was deleted
const updateSortOrder = obj => {
  return Object.entries(obj)
    .sort((a, b) => {
      return a[1].sortOrder - b[1].sortOrder;
    })
    .map((item, index) => {
      item[1].sortOrder = index + 1;
      return item;
    })
    .reduce((acc, [key, item]) => {
      acc[key] = item;
      return acc;
    }, {});
};

export default updateSortOrder;
