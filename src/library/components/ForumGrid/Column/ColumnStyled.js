import styled, { css } from "styled-components";
import fallback from "../constants";

const getColumnWidth = (dividend, divisor = 12) => {
  const decimal = dividend / divisor;
  const percent = decimal.toFixed(5) * 100;
  return `${percent}%`;
};

const buildStyles = (prefix = "", device = {}, props) => {
  let styles = "";
  if (props[prefix]) {
    styles += `flex-basis: ${getColumnWidth(props[prefix], device.columns)};
    max-width: ${getColumnWidth(props[prefix], device.columns)};`;
  }
  const isNum = value => typeof value === "number";
  if (isNum(props[`${prefix}Order`])) {
    styles += `order: ${props[`${prefix}Order`]};`;
  }
  if (props[`${prefix}Shrink`]) {
    styles += "flex: 0 1 auto;";
  }
  if (props[`${prefix}Fill`]) {
    styles += "flex: 1 1 auto;";
  }
  if (isNum(props[`${prefix}Gutter`])) {
    styles += `padding: 0 ${props[`${prefix}Gutter`]}px;`;
  }
  if (isNum(props[`${prefix}GutterLeft`])) {
    styles += `padding-left: ${props[`${prefix}GutterLeft`]}px;`;
  }
  if (isNum(props[`${prefix}GutterRight`])) {
    styles += `padding-right: ${props[`${prefix}GutterRight`]}px;`;
  }
  if (isNum(props[`${prefix}Offset`])) {
    styles += `padding-left: ${getColumnWidth(
      props[`${prefix}Offset`],
      device.columns
    )};`;
  }
  return styles;
};

export const ColumnContainer = styled.div`
  ${props => {
    const {
      theme = {},
      offset,
      order,
      shrink,
      fill,
      col,
      gutter,
      gutterLeft,
      gutterRight,
      autoGutter
    } = props;
    // theme variables
    const media = theme.media || fallback.media;
    const desktop = (theme.grid && theme.grid.desktop) || fallback.grid.desktop;
    let breakpoints = "";
    const downQueries = Object.keys(props).some(key => key.includes("Down"));
    const upQueries = Object.keys(props).some(key => key.includes("Up"));
    Object.values(media).forEach(query => {
      breakpoints += `${query.only} {
        ${autoGutter && `padding: 0px ${(query.gutter || 0) / 2}px`};
        ${buildStyles(query.prefix, query, props)};}`;
      if (downQueries && !!query.down) {
        breakpoints += `${query.down} {${buildStyles(
          `${query.prefix}Down`,
          query,
          props
        )};}`;
      }
      if (upQueries && !!query.up) {
        breakpoints += `${query.up} {${buildStyles(
          `${query.prefix}Up`,
          query,
          props
        )};}`;
      }
    });
    return css`
      box-sizing: border-box;
      flex: 1 0 0;
      max-width: 100%;
      ${order && `order: ${order}`};
      ${shrink && "flex: 0 1 auto;"};
      ${fill && "flex: 1 1 auto"};
      ${col &&
        `flex-basis: ${getColumnWidth(col, desktop.columns)};
         max-width: ${getColumnWidth(col, desktop.columns)};`};
      ${typeof gutter === "number" && `padding: 0 ${gutter}px;`};
      ${typeof gutterLeft === "number" && `padding-left: ${gutterLeft}px;`};
      ${typeof gutterRight === "number" && `padding-right: ${gutterRight}px;`};
      ${offset && `margin-left: ${getColumnWidth(offset, desktop.columns)};`};
      ${breakpoints};
    `;
  }}
`;
