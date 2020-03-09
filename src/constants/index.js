import { uuid } from "uuidv4";
import buildColorPalette from "../helpers/buildColorPalette";

export const GOOGLE_FONTS_API_KEY = "AIzaSyAP4JRmnXRwmd21aGgTmcfwjNv246Y5Cu8";

export const COLOR_CREATOR = {
  title: "NewColor",
  color: "",
  palette: { inProgress: true },
  isFlat: false,
  order: Infinity
};

export const INITIAL_COLORS = {
  [uuid()]: {
    title: "primary",
    color: "#FE5F55",
    palette: buildColorPalette("#FE5F55"),
    isFlat: false,
    order: 1
  },
  [uuid()]: {
    title: "secondary",
    color: "#84DCC6",
    palette: buildColorPalette("#84DCC6"),
    isFlat: false,
    order: 2
  },
  [uuid()]: {
    title: "neutral",
    color: "#BEBEBE",
    palette: buildColorPalette("#BEBEBE"),
    isFlat: false,
    order: 3
  },
  [uuid()]: {
    title: "warning",
    color: "#FDE74C",
    palette: { 400: "#FDE74C" },
    isFlat: true,
    order: 4
  },
  [uuid()]: {
    title: "success",
    color: "#A5D836",
    palette: { 400: "#A5D836" },
    isFlat: true,
    order: 5
  },
  [uuid()]: {
    title: "error",
    color: "#E50F00",
    palette: { 400: "#E50F00" },
    isFlat: true,
    order: 6
  },
  creator: COLOR_CREATOR
};

export const INITIAL_TYPOGRAPHY = {
  name: "Josefin Sans",
  baseSize: 16,
  upperRatio: 1,
  lowerRatio: 1,
  family: "Josefin Sans, sans-serif",
  variants: ["100", "300", "400", "600", "700"]
};

export const INITIAL_SPACING = {
  baseSize: 16,
  lowerRatio: 1,
  upperRatio: 4
};
