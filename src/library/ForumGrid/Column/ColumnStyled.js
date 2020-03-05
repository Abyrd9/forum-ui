import styled, { css } from 'styled-components';

const getColumnWidth = (dividend, divisor = 12) => {
  const decimal = dividend / divisor;
  const percent = decimal.toFixed(5) * 100;
  return `${percent}%`;
};

const buildStyles = (prefix = '', device = {}, props) => {
  let styles = '';
  styles += `padding: 0 ${device.gutter || 0}px;`;
  if (props[prefix]) {
    styles += `flex-basis: ${getColumnWidth(props[prefix], device.columns)};
    max-width: ${getColumnWidth(props[prefix], device.columns)};`;
  }
  const isNum = value => typeof value === 'number';
  if (isNum(props[`${prefix}Order`])) {
    styles += `order: ${props[`${prefix}Order`]};`;
  }
  if (isNum(props[`${prefix}Shrink`])) {
    styles += 'flex: 0 1 auto;';
  }
  if (isNum(props[`${prefix}Fill`])) {
    styles += 'flex: 1 1 auto;';
  }
  if (isNum(props[`${prefix}Gutter`])) {
    styles += `margin: 0 ${props[`${prefix}Gutter`]}px !important;`;
  }
  if (isNum(props[`${prefix}GutterLeft`])) {
    styles += `margin-left: ${props[`${prefix}GutterLeft`]}px !important;`;
  }
  if (isNum(props[`${prefix}GutterRight`])) {
    styles += `margin-right: ${props[`${prefix}GutterRight`]}px !important;`;
  }
  if (isNum(props[`${prefix}Offset`])) {
    styles += `margin-left: ${getColumnWidth(props[`${prefix}Offset`], device.columns)};`;
  }
  return styles;
};

export const ColumnContainer = styled.div`
  ${props => {
    const { theme, offset, order, shrink, fill, col, gutter, gutterLeft, gutterRight } = props;
    // theme variables
    const { grid = {}, media = {} } = theme;
    const { desktop = {} } = grid;
    let breakpoints = '';
    const downQueries = Object.keys(props).some(key => key.includes('Down'));
    const upQueries = Object.keys(props).some(key => key.includes('Up'));
    Object.values(media).forEach(query => {
      breakpoints += `${query.only} {${buildStyles(query.prefix, query, props)};}`;
      if (downQueries && !!query.down) {
        breakpoints += `${query.down} {${buildStyles(`${query.prefix}Down`, query, props)};}`;
      }
      if (upQueries && !!query.up) {
        breakpoints += `${query.up} {${buildStyles(`${query.prefix}Up`, query, props)};}`;
      }
    });
    return css`
      box-sizing: border-box;
      flex: 1 0 0;
      max-width: 100%;
      ${order && `order: ${order}`};
      ${shrink && 'flex: 0 1 auto;'};
      ${fill && 'flex: 1 1 auto'};
      ${col &&
        `flex-basis: ${getColumnWidth(col, desktop.columns)};
         max-width: ${getColumnWidth(col, desktop.columns)};`};
      ${typeof gutter === 'number' && `margin: 0 ${gutter}px !important;`};
      ${typeof gutterLeft === 'number' && `margin-left: ${gutterLeft}px !important;`};
      ${typeof gutterRight === 'number' && `margin-right: ${gutterRight}px !important;`};
      ${offset && `margin-left: ${getColumnWidth(offset, desktop.columns)} !important;`};
      ${breakpoints};
    `;
  }}
`;
