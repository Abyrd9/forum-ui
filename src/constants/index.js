import { uuid } from "uuidv4";
import buildColorPalette from "../helpers/buildColorPalette";

export const GOOGLE_FONTS_API_KEY = "AIzaSyAP4JRmnXRwmd21aGgTmcfwjNv246Y5Cu8";
export const GOOGLE_FONTS_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API_KEY}&sort=popularity`;

export const COLOR_CREATOR = {
  title: "NewColor",
  color: "",
  palette: { inProgress: true },
  isFlat: false,
  sortOrder: Infinity
};

export const INITIAL_COLORS = {
  [uuid()]: {
    title: "primary",
    color: "#FE5F55",
    palette: buildColorPalette("#FE5F55"),
    isFlat: false,
    sortOrder: 1
  },
  [uuid()]: {
    title: "secondary",
    color: "#006989",
    palette: buildColorPalette("#006989"),
    isFlat: false,
    sortOrder: 2
  },
  [uuid()]: {
    title: "neutral",
    color: "#BEBEBE",
    palette: buildColorPalette("#BEBEBE"),
    isFlat: false,
    sortOrder: 3
  },
  [uuid()]: {
    title: "warning",
    color: "#FDE74C",
    palette: { 400: "#FDE74C" },
    isFlat: true,
    sortOrder: 4
  },
  [uuid()]: {
    title: "success",
    color: "#A5D836",
    palette: { 400: "#A5D836" },
    isFlat: true,
    sortOrder: 5
  },
  [uuid()]: {
    title: "error",
    color: "#E50F00",
    palette: { 400: "#E50F00" },
    isFlat: true,
    sortOrder: 6
  }
};

export const INITIAL_TYPOGRAPHY = {
  baseSize: 16,
  upperRatio: 1,
  lowerRatio: 1,
  name: "Josefin Sans",
  family: "Josefin Sans, sans-serif",
  variants: ["100", "300", "400", "600", "700"]
};

export const INITIAL_SPACING = {
  baseSize: 16,
  lowerRatio: 1,
  upperRatio: 4
};

export const ACTION_CODE_SETTINGS = {
  url:
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
      ? "http://localhost:3000"
      : "",
  handleCodeInApp: true
};
