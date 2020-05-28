import chroma from "chroma-js";

// Need to be sure that at least one color on the colors object has a "400" base value.
export const checkColorObj = colors => {
  return Object.values(colors).some(
    color =>
      color[400] && typeof color[400] === "string" && chroma.valid(color[400])
  );
};
