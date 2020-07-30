import styled, { css } from "styled-components";
import chroma from "chroma-js";
import styleMap from "../../helpers/styleMap";
import DEFAULT_THEME from "../../constants";
import { checkColorObj } from "../../helpers/checkThemeObjects";
import buildColorPalette from "../../helpers/buildColorPalette";

export const ButtonContainer = styled.button`
  ${props => {
    const {
      theme = {},
      outline = false,
      loading = false,
      colorWhite = false,
      colorBlack = false,
      grow = false
    } = props;
    const { colors = {}, font = {} } = theme;

    const { neutral } = DEFAULT_THEME.colors;
    let color = checkColorObj(colors)
      ? styleMap({
          ...colors,
          default: neutral
        })(props)[400]
      : neutral[400];
    color = buildColorPalette(color);

    const textcolor =
      chroma.valid(color[400]) && chroma.contrast("#ffffff", color[400]) < 4.5
        ? "#ffffff"
        : "#000000";

    return css`
      /* Base Styles */
      transition: all 100ms cubic-bezier(0, 0, 0.2, 1);
      cursor: ${loading ? "not-allowed" : "pointer"};
      width: ${grow ? "100%" : "auto"};
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      color: ${textcolor};
      ${colorWhite && "color: #ffffff;"};
      ${colorBlack && "color: #000000;"};
      background-color: ${color[400]};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      &:hover:not(:disabled) {
        background-color: ${color[500]};
      }
      &:active:not(:disabled) {
        background-color: ${color[600]};
      }
      &:disabled {
        cursor: not-allowed;
        box-shadow: none;
        color: ${loading ? textcolor : color[300]};
        background-color: ${loading ? color[400] : color[200]};
      }
      ${styleMap({
        small: css`
          font-size: ${font[300]};
          border-radius: 3px;
          padding: ${outline ? "4px 8px" : "6px 10px"};
        `,
        large: css`
          font-size: ${font[400]};
          border-radius: 6px;
          padding: ${outline ? "12px 24px" : "14px 26px"};
        `,
        default: css`
          font-size: ${font[400]};
          border-radius: 4px;
          padding: ${outline ? "8px 14px" : "10px 16px"};
        `
      })};

      /* Outline Styles */
      ${outline &&
        css`
          background-color: transparent;
          border: 2px solid ${color[400]};
          font-weight: 600;
          color: ${color[400]};
          &:hover:not(:disabled) {
            background-color: transparent;
            color: ${color[500]};
            border: 2px solid ${color[500]};
          }
          &:active:not(:disabled) {
            background-color: transparent;
            color: ${color[600]};
            border: 2px solid ${color[600]};
          }
          &:disabled {
            background-color: transparent;
            color: ${loading ? color[400] : color[200]};
            border: 2px solid ${loading ? color[400] : color[200]};
          }
        `};

      /* Focus Styles */
      &:before {
        transition: all 100ms ease-in-out;
        opacity: 0;
        display: inline-block;
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        border-radius: 4px;
        background-color: transparent;
        box-shadow: 0 0 3px ${color[400]}, 0 0 5px ${color[400]};
      }
      &:focus:before {
        opacity: 1;
      }
      &:hover:before,
      &:active:before {
        opacity: 0;
      }

      /* Loader Styles */
      .loader,
      .button-icon {
        margin-left: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        ${styleMap({
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
          `
        })}
        path {
          fill: ${outline ? color[400] : textcolor};
          ${colorWhite && `fill: ${outline ? color[400] : "#ffffff"};`};
          ${colorBlack && `fill: ${outline ? color[400] : "#000000"};`};
        }
      }
    `;
  }}
`;
