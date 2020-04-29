import styled, { css } from "styled-components";

export const DeleteButtonContainer = styled.button`
  ${props => {
    const { theme = {} } = props;
    const { colors = {} } = theme;
    return css`
      cursor: pointer;
      border: none;
      outline: none;
      background-color: transparent;
      height: auto;
      width: auto;
      display: inline-flex;
      padding: 0;
      &:focus .delete-icon {
        box-shadow: 0 0 2px ${colors.neutral[800]},
          0 0 4px ${colors.neutral[800]};
        border-radius: 2px;
      }
      &:active .delete-icon {
        box-shadow: none;
      }
      .delete-icon {
        height: 20px;
        width: 20px;
        path {
          fill: ${colors.black};
        }
      }
    `;
  }}
`;
