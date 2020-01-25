import styled, { css } from 'styled-components';
import chroma from 'chroma-js';
import buildStyleMap from '../../helpers/buildStyleMap';
import buildColorStyleMap from '../../helpers/buildColorStyleMap';
import checkColorBrightness from '../../helpers/checkColorBrightness';

const { isReadableDark } = checkColorBrightness;

const baseStyles = (color, textColor) => css`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  position: relative;
  color: ${textColor};
  background-color: ${color};
  transition: all 150ms ease-in-out;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  &:focus {

  }
  &:hover {

  }
  &:active {
    background-color: ${chroma(color).darken(0.5)};
  }
  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    background-color: ${chroma(color).brighten(1)};
  }
`;

const outlineStyles = color => css`
  background-color: transparent;
  border: 2px solid ${color};
  font-weight: bold;
  color: ${color};
  &:active, &:disabled {
    background-color: transparent;
  }
  &:active {
    color: ${chroma(color).darken(0.5)};
    border: 2px solid ${chroma(color).darken(0.5)};
  }
`;

const loadingStyles = () => css`
  cursor: not-allowed;
`;


// focused, hovered, active, disabled, loading
export const ButtonContainer = styled.button`
  ${props => {
    const { theme = {}, outline = false, loading = false } = props;
    const { font = {}, colors = {} } = theme;
    const color = buildColorStyleMap()(props);
    const textColor = isReadableDark(color) ? colors.white : colors.black;
    return css`
      ${baseStyles(color, textColor)}
      ${outline && outlineStyles(color)}
      ${loading && loadingStyles()}
      font-size: ${buildStyleMap({
        small: font[300],
        large: font[500],
        default: font[400],
      })};
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
      &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      }
      &:active {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0);
      }
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
      &:focus:before {
        opacity: 1;
      }
      &:hover:before, &:active:before {
        opacity: 0;
      }
      .loader {
        margin-left: 6px;
        height: ${buildStyleMap({
          small: font[300],
          large: font[500],
          default: font[400],
        })};
        width: ${buildStyleMap({
          small: font[300],
          large: font[500],
          default: font[400],
        })};
        path {
          fill: ${outline ? color : textColor};
        }
      }
    `;
  }}
`;
