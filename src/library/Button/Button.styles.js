import styled, { css } from 'styled-components';
import chroma from 'chroma-js';
import buildStyleMap from '../../helpers/buildStyleMap';
import buildColorStyleMap from '../../helpers/buildColorStyleMap';
import checkColorBrightness from '../../helpers/checkColorBrightness';

const { isReadableLight } = checkColorBrightness;

export const ButtonContainer = styled.button`
  ${props => {
    const {
      theme = {},
      outline = false,
      loading = false,
      focused = false,
      hovered = false,
      pressed = false,
    } = props;
    const { font = {}, colors = {} } = theme;
    const color = buildColorStyleMap()(props);
    const textColor = isReadableLight(color, 2.5) ? colors.white : colors.black;
    return css`
      /* Base Styles */
      transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
      cursor: ${loading ? 'not-allowed' : 'pointer'};
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      position: relative;
      color: ${textColor};
      background-color: ${color};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      &:hover:not(:disabled) {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
      &:active {
        background-color: ${chroma(color).darken(0.5)};
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0) !important;
      }
      &:disabled {
        cursor: not-allowed;
        box-shadow: none;
        color: ${loading ? textColor : chroma(color).luminance(0.25)};
        background-color: ${loading ? color : chroma(color).brighten(1)};
      }
      ${buildStyleMap({
        small: css`
          font-size: ${outline ? font[200] : font[300]};
          border-radius: 3px;
          padding: 4px 8px;
        `,
        large: css`
          font-size: ${outline ? font[400] : font[500]};
          border-radius: 6px;
          padding: 10px 18px;
        `,
        default: css`
          font-size: ${outline ? font[300] : font[400]};
          border-radius: 4px;
          padding: 8px 14px;
        `,
      })};

      /* Storybook Example Styles */
      ${focused &&
        css`
          &:before {
            opacity: 1 !important;
          }
        `};
      ${hovered &&
        css`
          &:not(:disabled) {
            ${hovered &&
              'box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); !important'};
          }
        `};
      ${pressed &&
        css`
          background-color: ${chroma(color).darken(0.5)} !important;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0) !important;
        `};

      /* Outline Styles */
      ${outline &&
        css`
          background-color: transparent;
          border: 2px solid ${color};
          font-weight: 600;
          color: ${color};
          &:active {
            background-color: transparent;
            color: ${chroma(color).darken(0.5)};
            border: 2px solid ${chroma(color).darken(0.5)};
          }
          &:disabled {
            background-color: transparent;
            color: ${loading ? color : chroma(color).luminance(0.65)};
            border: 2px solid ${loading ? color : chroma(color).luminance(0.65)};
          }

          /* Storybook Example Styles */
          ${pressed &&
            css`
              background-color: transparent !important;
              color: ${chroma(color).darken(0.5)} !important;
              border: 2px solid ${chroma(color).darken(0.5)} !important;
            `};
        `};

      /* Focus Styles */
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
      &:hover:before,
      &:active:before {
        opacity: 0;
      }

      /* Loader Styles */
      .loader {
        margin-left: 6px;
        ${buildStyleMap({
          small: css`
            height: ${outline ? font[200] : font[300]};
            width: ${outline ? font[200] : font[300]};
          `,
          large: css`
            height: ${outline ? font[400] : font[500]};
            width: ${outline ? font[400] : font[500]};
          `,
          default: css`
            height: ${outline ? font[300] : font[400]};
            width: ${outline ? font[300] : font[400]};
          `,
        })}
        path {
          fill: ${outline ? color : textColor};
        }
      }
    `;
  }}
`;
