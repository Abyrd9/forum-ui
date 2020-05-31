import styled, { css } from "styled-components";
import styleMap from "../../helpers/styleMap";
import DEFAULT_THEME from "../../constants";
import { checkColorObj } from "../../helpers/checkThemeObjects";
import buildColorPalette from "../../helpers/buildColorPalette";

export const CounterContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { colors = {} } = theme;
    const { neutral } = DEFAULT_THEME.colors;
    let color = checkColorObj(colors)
      ? styleMap({
          ...colors,
          default: neutral
        })(props)[400]
      : neutral[400];
    color = buildColorPalette(color);

    return css`
      display: flex;
      align-items: center;
      .forum-ui-counter-button {
        transition: all 200ms ease-in-out;
        cursor: pointer;
        height: 40px;
        width: 40px;
        border-radius: 100%;
        padding: 0;
        border: 2px solid ${neutral[200]};
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: 12px;
          path {
            fill: ${neutral[600]};
          }
        }
        &:focus,
        &:hover {
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.14),
            0 1px 5px rgba(0, 0, 0, 0.2);
          outline: none;
        }
        &:active {
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12),
            0 1px 4px rgba(0, 0, 0, 0.1);
        }
        &:disabled {
          cursor: default;
          box-shadow: none;
          border: 2px solid ${neutral[300]};
          background-color: ${neutral[200]};
          svg path {
            fill: ${neutral[300]};
          }
        }
      }
      .forum-ui-counter-input-label {
        cursor: text;
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        margin: 0px 10px;
        width: 65px;
        height: 55px;
        border-radius: 15px;
        border: 2px solid ${neutral[200]};
        background-color: #ffffff;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
        display: flex;
        justify: center;
        align-items: center;
        &--is-disabled {
          cursor: default;
          border: 2px solid ${neutral[300]};
          background-color: ${neutral[100]};
          box-shadow: none;
        }
        &--read-only {
          cursor: default;
        }
        &:focus-within {
          &:before {
            opacity: 1;
          }
          input {
            outline: none;
          }
        }
        &:before {
          transition: all 200ms ease-in-out;
          opacity: 0;
          display: inline-block;
          content: "";
          position: absolute;
          top: -3px;
          left: -3px;
          width: 67px;
          height: 58px;
          border-radius: 15px;
          background-color: transparent;
          box-shadow: 0 0 5px ${color[400]};
        }
      }
      .forum-ui-counter-input {
        background-color: transparent;
        width: 100%;
        text-align: center;
        &:disabled {
          color: ${neutral[300]};
        }
      }
    `;
  }}
`;
