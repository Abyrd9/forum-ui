import styled, { css } from "styled-components";
import styleMap from "../../helpers/styleMap";

export const DropdownStyled = styled.button`
  ${props => {
    const {
      theme = {},
      focused = false,
      hovered = false,
      pressed = false
    } = props;
    const { font = {}, colors = {} } = theme;
    return css`
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
      color: ${colors.neutral[800]};
      background-color: ${colors.neutral[100]};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      &:hover:not(:disabled) {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 3px rgba(0, 0, 0, 0.23);
      }
      &:active {
        background-color: ${colors.neutral[200]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0), 0 2px 3px rgba(0, 0, 0, 0) !important;
      }
      &:disabled {
        cursor: not-allowed;
        box-shadow: none;
        color: ${colors.neutral[400]};
        background-color: ${colors.neutral[200]};
        .chevron path {
          fill: ${colors.neutral[400]};
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
        box-shadow: 0 0 3px ${colors.primary[400]},
          0 0 5px ${colors.primary[400]};
      }
      &:focus:before {
        opacity: 1;
      }
      &:hover:before,
      &:active:before {
        opacity: 0;
      }

      /* Storybook Example Styles */
      &:before {
        ${focused && "opacity: 1;"}
      }
      &:not(:disabled) {
        ${hovered &&
          "box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 3px rgba(0, 0, 0, 0.23);"}
      }
      ${pressed && `background-color: ${colors.neutral[500]};`};
      ${pressed &&
        `box-shadow: 0 2px 4px rgba(0, 0, 0, 0), 0 2px 3px rgba(0, 0, 0, 0);`};

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
          fill: ${colors.neutral[800]};
        }
      }
    `;
  }}
`;
