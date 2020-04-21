import styled, { css } from "styled-components";
import buildColorValuesObj from "../../helpers/buildColorValuesObj";
import { NEUTRAL_COLORS } from "../../constants";

export const CheckboxStyled = styled.label`
  ${props => {
    const { focused, hovered } = props;
    const colorObj = buildColorValuesObj(props);
    return css`
      position: relative;
      cursor: pointer;
      input {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
      }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        border: 2px solid ${NEUTRAL_COLORS[400]};
        border-radius: 6px;
        width: 25px;
        height: 25px;
        svg {
          transition: all 100ms ease-in-out;
          opacity: 0;
          path {
            fill: ${colorObj.base};
          }
        }

        /* Focus Styles (Outline Effect) */
        &:before {
          transition: all 100ms ease-in-out;
          opacity: 0;
          display: inline-block;
          content: "";
          position: absolute;
          top: -1px;
          left: -1px;
          width: calc(100% + 2px);
          height: calc(100% + 2px);
          border-radius: 6px;
          background-color: transparent;
          box-shadow: 0 0 3px ${colorObj.base}, 0 0 5px ${colorObj.base};
        }
      }

      /* Hover Styles */
      span svg {
        ${hovered && "transition: all 150ms ease-in-out;"};
        ${hovered && "opacity: 0.25;"};
      }
      &:hover svg {
        transition: all 150ms ease-in-out;
        opacity: 0.25;
      }

      /* Focus Styles */
      span:before {
        ${focused && "opacity: 1;"};
      }
      input:focus + span:before {
        opacity: 1;
      }

      /* Checked Styles */
      input:checked + span {
        border-color: ${colorObj.base};
        svg {
          opacity: 1;
        }
      }

      /* Disabled Styles */
      input:disabled + span {
        cursor: not-allowed;
        border-color: ${NEUTRAL_COLORS[400]};
        background-color: ${NEUTRAL_COLORS[200]};
        svg {
          opacity: 0;
        }
      }
    `;
  }}
`;