import styled, { css } from "styled-components";
import styleMap from "../../../helpers/styleMap";
// import buildColorValuesObj from "../../helpers/buildColorValuesObj";

export const DropdownStyled = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { font = {} } = theme;
    // const colorObj = buildColorValuesObj(props);
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
        /* color: ${colorObj.text}; */
        /* background-color: ${colorObj.base}; */
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        &:hover:not(:disabled) {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16),
            0 2px 3px rgba(0, 0, 0, 0.23);
        }
        &:active {
          /* background-color: ${colorObj.active}; */
        }
        &:disabled {
          cursor: not-allowed;
          box-shadow: none;
          /* color: ${colorObj.base}; */
          /* background-color: ${colorObj.disabled}; */
          .chevron path {
            /* fill: ${colorObj.text}; */
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
          /* box-shadow: 0 0 3px ${colorObj.base}, 0 0 5px ${colorObj.base}; */
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
            /* fill: ${colorObj.text}; */
          }
        }
      }
    `;
  }}
`;
