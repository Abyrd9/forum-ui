const buildThemePayload = store => {
  const colors = Object.entries(store.colors).reduce((acc, [key, value]) => {
    if (key !== 'creator') {
      acc[key] = value;
    }
    return acc;
  }, {});
  const payload = Object.entries(store).reduce((acc, [key, value]) => {
    if (key === 'colors') {
      acc[key] = colors;
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
  return payload;
};

export default buildThemePayload;