import styled, { css } from 'styled-components';
import rowStyles from './constants';

import buildStyleMap from '../../../helpers/buildStyleMap';

const buildStyles = (prefix = '', device = {}, props) => {
  let styles = '';
  const hasProp = name => props[`${prefix}${name}`];
  if (hasProp('Stretch')) {
    styles += `
      width: calc(100% + ${(device.gutter || 0) * 2}px);
      margin-left: -${device.gutter || 0}px
      padding: 0px;`;
  }
  if (hasProp('Fill')) {
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
  if (hasProp('Start')) {
    styles += 'justify-content: flex-start;';
  }
  if (hasProp('End')) {
    styles += 'justify-content: flex-end;';
  }
  if (hasProp('Center')) {
    styles += 'justify-content: center;';
  }
  if (hasProp('Between')) {
    styles += 'justify-content: space-between;';
  }
  if (hasProp('Around')) {
    styles += 'justify-content: space-around;';
  }
  if (hasProp('Even')) {
    styles += 'justify-content: space-evenly;';
  }
  if (hasProp('Top')) {
    styles += 'align-items: flex-start;';
  }
  if (hasProp('Bottom')) {
    styles += 'align-items: flex-end;';
  }
  if (hasProp('Middle')) {
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
    const { theme, stretch, fill } = props;
    // theme variables
    const { media = {} } = theme;
    let breakpoints = '';
    const downQueries = Object.keys(props).some(key => key.includes('Down'));
    const upQueries = Object.keys(props).some(key => key.includes('Up'));
    Object.values(media).forEach(query => {
      breakpoints += `${query.only} {
        width: 100%;
        ${stretch &&
          `
          width: calc(100% + ${(query.gutter || 0) * 2}px);
          margin-left: ${stretch ? `-${query.gutter || 0}px` : '0px'}`};
        ${fill &&
          `
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        `}   
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
      flex-direction: ${buildStyleMap(rowStyles.flexDirection)};
      flex-wrap: ${buildStyleMap(rowStyles.flexWrap)};
      justify-content: ${buildStyleMap(rowStyles.justifyContent)};
      align-items: ${buildStyleMap(rowStyles.alignItems)};
      ${breakpoints};
    `;
  }}
`;
