import chroma from "chroma-js";

const buildColorValuesObj = props => {
  const { theme = {} } = props;
  const { colors = {} } = theme;
  let payload = {
    base: "#c3c3c3",
    active: "#a2a2a2",
    hovered: "#f1f1f0",
    disabled: "#e2e2e2",
    textDisabled: "#b0b0b0",
    text: "#000000"
  };

  if (!colors) {
    console.error("Theme needs a 'colors' object.");
    return "";
  }

  // If a prop name matches a key on the colors object, get that prop value
  const colorKeys = Object.keys(colors);
  const colorProp = Object.entries(props).find(([key]) => {
    return colorKeys.includes(key);
  });

  let base = "";
  if (colorProp) {
    // Since it's gotten from entries, object key/value pair is an array
    const propKey = colorProp[0];
    const propValue = colorProp[1];

    const color = colors[propKey] || {};
    if (typeof propValue === "boolean") {
      base = color[400] || "";
    } else if (typeof propValue === "string" && /^[1-8]00$/g.test(propValue)) {
      base = color[propValue] || "";
    }
  }

  if (chroma.valid(base)) {
    payload = {
      base,
      active: chroma(base).darken(0.5),
      hovered: chroma(base).alpha(0.35),
      disabled: "#e2e2e2",
      textDisabled: "#b0b0b0",
      text: chroma.contrast(base, "#ffffff") > 4.5 ? "#000000" : "#ffffff"
    };
  }
  return payload;
};

export default buildColorValuesObj;
