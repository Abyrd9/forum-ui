const buildGoogleFontsUrl = (family, variants, fullUrl = false) => {
  let url = [];
  const baseFamily = family.split(",")[0];
  url.push(fullUrl ? baseFamily.replace(/ /g, "+") : baseFamily);
  if (variants.length > 0) {
    variants.forEach((weight, index) => {
      let string = "";
      string += index === 0 ? ":" : ",";
      string += weight === "regular" ? "400" : weight;
      url.push(string);
    });
  }
  url = url.join("");
  if (fullUrl) {
    url = `https://fonts.googleapis.com/css?family=${url}&display=swap`;
  }
  return url;
};

export default buildGoogleFontsUrl;
