const buildGoogleFontsUrl = (family, variants, fullUrl = false) => {
  let url = [];
  url.push(family.replace(/ /g, '+'));
  if (variants.length > 0) {
    variants.forEach((weight, index) => {
      let string = '';
      string += index === 0 ? ':' : ',';
      string += weight === 'regular' ? '400' : weight;
      url.push(string);
    });
  }
  url = url.join('');
  if (fullUrl) {
    url = `https://fonts.googleapis.com/css?family=${url}&display=swap`;
  }
  return url;
};

export default buildGoogleFontsUrl;
