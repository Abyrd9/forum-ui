import styled, { css } from 'styled-components';
import chroma from 'chroma-js';
import buildStyleMap from '../../helpers/buildStyleMap';
import buildColorStyleMap from '../../helpers/buildColorStyleMap';
import checkColorBrightness from '../../helpers/checkColorBrightness';

const { isReadableDark } = checkColorBrightness;

export const ButtonContainer = styled.button`
  ${props => {
    const { theme = {}, outline = false } = props;
    const { font = {}, colors = {} } = theme;
    const color = buildColorStyleMap()(props);
    return css`
      transition: box-shadow 100ms ease, background-color 50ms ease;
      cursor: pointer;
      position: relative;
      border: ${outline ? `2px solid ${color}` : 'none'};
      outline: none;
      border-radius: ${buildStyleMap({
        small: '2px',
        large: '6px',
        default: '4px',
      })};
      padding: ${buildStyleMap({
        small: outline ? '2px 6px' : '4px 8px',
        large: outline ? '8px 16px' : '10px 18px',
        default: outline ? '6px 12px' : '8px 14px',
      })};
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0);
      font-size: ${buildStyleMap({
        small: font[300],
        large: font[500],
        default: font[400],
      })};
      ${outline && 'font-weight: bold'};
      ${outline && `color: ${color}`};
      ${!outline && `color: ${isReadableDark(color) ? colors.white : colors.black}`};
      background-color: ${outline ? 'transparent' : color};
      &:before {
        transition: all 100ms ease-in-out;
        opacity: 0;
        display: inline-block;
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        border-radius: 4px;
        background-color: transparent;
        box-shadow: 0 0 3px ${color}, 0 0 5px ${color};
      }
      &:focus {
        &:before {
          opacity: 1;
        }
      }
      &:hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        &:before {
          opacity: 0;
        }
      }
      &:active {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0);
        ${outline && `color: ${chroma.valid(color) && chroma(color).darken(0.5)}`};
        border: ${outline
          ? `2px solid ${chroma.valid(color) && chroma(color).darken(0.5)}`
          : 'none'};
        background-color: ${outline
          ? 'transparent'
          : chroma.valid(color) && chroma(color).darken(0.5)};
        &:before {
          opacity: 0;
        }
      }
    `;
  }}
`;
