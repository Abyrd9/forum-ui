import styled, { css } from 'styled-components';
import rowStyles from './constants';
import fallback from '../../constants';
import styleMap from '../../../helpers/styleMap';

const buildStyles = (prefix = '', device = {}, props) => {
  let styles = '';
  const hasProp = name => props[`${prefix}${name}`];
  if (hasProp('FillGrid')) {
    styles += `
      width: calc(100% + ${(device.gutter || 0) * 2}px);
      margin-left: -${device.gutter || 0}px;
      padding: 0px;`;
  }
  if (hasProp('FillScreen')) {
    styles += `
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;`;
  }
  if (hasProp('Reverse')) {
    styles += 'flex-direction: row-reverse;';
  }
  if (hasProp('Wrap')) {
    styles += 'flex-wrap: wrap;';
  }
  if (hasProp('NoWrap')) {
    styles += 'flex-wrap: nowrap;';
  }
  if (hasProp('WrapReverse')) {
    styles += 'flex-wrap: wrap-reverse;';
  }
  if (hasProp('AlignLeft')) {
    styles += 'justify-content: flex-start;';
  }
  if (hasProp('AlignRight')) {
    styles += 'justify-content: flex-end;';
  }
  if (hasProp('AlignCenter')) {
    styles += 'justify-content: center;';
  }
  if (hasProp('SpaceBetween')) {
    styles += 'justify-content: space-between;';
  }
  if (hasProp('SpaceAround')) {
    styles += 'justify-content: space-around;';
  }
  if (hasProp('SpaceEvenly')) {
    styles += 'justify-content: space-evenly;';
  }
  if (hasProp('AlignTop')) {
    styles += 'align-items: flex-start;';
  }
  if (hasProp('AlignBottom')) {
    styles += 'align-items: flex-end;';
  }
  if (hasProp('AlignMiddle')) {
    styles += 'align-items: center;';
  }
  if (hasProp('Stretch')) {
    styles += 'align-items: stretch;';
  }
  if (hasProp('Baseline')) {
    styles += 'align-items: baseline;';
  }
  return styles;
};

export const RowContainer = styled.div`
  ${props => {
    const { theme = {}, fillGrid = false, fillScreen = false } = props;
    // theme variables
    const media = theme.media || fallback.media;
    let breakpoints = '';
    const downQueries = Object.keys(props).some(key => key.includes('Down'));
    const upQueries = Object.keys(props).some(key => key.includes('Up'));
    Object.values(media).forEach(query => {
      breakpoints += `${query.only} {
        ${fillGrid &&
          ` width: calc(100% + ${(query.gutter || 0) * 2}px);
            margin-left: ${fillGrid ? `-${query.gutter || 0}px` : '0px'};
          `};
        ${fillScreen &&
          `
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
          `};
        ${buildStyles(query.prefix, query, props)};
      }`;
      if (downQueries && !!query.down) {
        breakpoints += `${query.down} {
          ${buildStyles(`${query.prefix}Down`, query, props)};
        }`;
      }
      if (upQueries && !!query.up) {
        breakpoints += `${query.up} {
          ${buildStyles(`${query.prefix}Up`, query, props)};
        }`;
      }
    });
    return css`
      /* base styles */
      box-sizing: border-box;
      display: flex;
      flex: 0 1 auto;
      /* prop styles */
      flex-direction: ${styleMap(rowStyles.flexDirection)};
      flex-wrap: ${styleMap(rowStyles.flexWrap)};
      justify-content: ${styleMap(rowStyles.justifyContent)};
      align-items: ${styleMap(rowStyles.alignItems)};
      ${breakpoints};
    `;
  }}
`;
