import styled, { css } from "styled-components";
import chroma from "chroma-js";
import styleMap from "../../helpers/styleMap";
import DEFAULT_THEME from "../../constants";
import { checkColorObj } from "../../helpers/checkThemeObjects";
import buildColorPalette from "../../helpers/buildColorPalette";

export const DropdownStyled = styled.div`
  ${props => {
    const { theme = {} } = props;
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
      .dropdown-button {
        /* Base Styles */
        transition: all 100ms cubic-bezier(0, 0, 0.2, 1);
        cursor: pointer;
        width: ${props.grow ? "100%" : "auto"};
        min-width: 250px;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        font-size: ${font[400]};
        border-radius: 4px;
        padding: 16px 24px;
        color: ${textcolor};
        background-color: ${color[400]};
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        &:hover:not(:disabled) {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16),
            0 2px 3px rgba(0, 0, 0, 0.23);
        }
        &:active {
          background-color: ${color[300]};
        }
        &:disabled {
          cursor: not-allowed;
          box-shadow: none;
          color: ${color[400]};
          background-color: ${color[100]};
          .chevron path {
            fill: ${textcolor};
          }
        }

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
        .chevron {
          transform: rotate(180deg);
          ${styleMap({
            small: css`
              height: ${font[200]};
              width: ${font[300]};
            `,
            large: css`
              height: ${font[400]};
              width: ${font[400]};
            `,
            default: css`
              height: ${font[300]};
              width: ${font[300]};
            `
          })}
          path {
            fill: ${textcolor};
          }
        }
      }
    `;
  }}
`;
