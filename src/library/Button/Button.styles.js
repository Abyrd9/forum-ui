import styled, { css } from 'styled-components';
import chroma from 'chroma-js';
import buildStyleMap from '../../helpers/buildStyleMap';

const isDark = color => chroma.valid(color) && chroma(color).luminance() < 0.4;

export const ButtonContainer = styled.button`
  ${props => {
    const { theme = {}, color = '' } = props;
    const { font = {}, colors = {} } = theme;

    const colorVal = color ? colors[color] : colors.primary;

    return css`
      transition: box-shadow 100ms ease, background-color 50ms ease;
      cursor: pointer;
      position: relative;
      border: none;
      outline: none;
      border-radius: 4px;
      padding: ${buildStyleMap({
        small: '8px 14px',
        large: '16px 28px',
        default: '12px 24px',
      })};
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0);
      font-size: ${buildStyleMap({
        small: font[300].size,
        large: font[500].size,
        default: font[400].size,
      })};
      font-weight: ${buildStyleMap({
        small: '400',
        large: '400',
        default: '500',
      })};
      color: ${isDark(colorVal[400]) ? colors.white : colors.black};
      background-color: ${colorVal[400]};
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
        box-shadow: 0 0 3px ${colorVal[400]}, 0 0 5px ${colorVal[400]};
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
        background-color: ${colorVal[500]};
        &:before {
          opacity: 0;
        }
      }
    `;
  }}
`;
