import styled, { css } from "styled-components";
import styleMap from "../../../helpers/styleMap";
import buildColorValuesObj from "../../helpers/buildColorValuesObj";

export const ButtonContainer = styled.button`
  ${props => {
    const {
      theme = {},
      outline = false,
      loading = false,
      colorWhite = false,
      colorBlack = false
    } = props;
    const { font = {} } = theme;
    const colorObj = buildColorValuesObj(props);
    return css`
      /* Base Styles */
      transition: all 100ms cubic-bezier(0, 0, 0.2, 1);
      cursor: ${loading ? "not-allowed" : "pointer"};
      width: ${props.grow ? "100%" : "auto"};
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      color: ${colorObj.text};
      ${colorWhite && "color: #ffffff;"};
      ${colorBlack && "color: #000000;"};
      background-color: ${colorObj.base};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      &:hover:not(:disabled) {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 3px rgba(0, 0, 0, 0.23);
      }
      &:active:not(:disabled) {
        background-color: ${colorObj.active};
      }
      &:disabled {
        cursor: not-allowed;
        box-shadow: none;
        color: ${loading ? colorObj.text : colorObj.base};
        background-color: ${loading ? colorObj.base : colorObj.disabled};
      }
      ${styleMap({
        small: css`
          font-size: ${font[300]};
          border-radius: 3px;
          padding: 4px 8px;
        `,
        large: css`
          font-size: ${font[400]};
          border-radius: 6px;
          padding: 12px 24px;
        `,
        default: css`
          font-size: ${font[400]};
          border-radius: 4px;
          padding: 8px 14px;
        `
      })};

      /* Outline Styles */
      ${outline &&
        css`
          background-color: transparent;
          border: 2px solid ${colorObj.base};
          font-weight: 600;
          color: ${colorObj.base};
          &:active {
            background-color: transparent;
            color: ${colorObj.active};
            border: 2px solid ${colorObj.active};
          }
          &:disabled {
            background-color: transparent;
            color: ${loading ? colorObj.base : colorObj.disabled};
            border: 2px solid ${loading ? colorObj.base : colorObj.disabled};
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
        box-shadow: 0 0 3px ${colorObj.base}, 0 0 5px ${colorObj.base};
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
          fill: ${outline ? colorObj.base : colorObj.text};
          ${colorWhite && `fill: ${outline ? colorObj.base : "#ffffff"};`};
          ${colorBlack && `fill: ${outline ? colorObj.base : "#000000"};`};
        }
      }
    `;
  }}
`;
