import styled, { css } from "styled-components";

export const ToolboxContainerStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {} } = theme;
    return css`
      display: flex;
      align-items: center;
      padding: 12px 24px;
      border-radius: 5px;
      width: fit-content;
      background-color: ${colors.neutral[100]};
      .toolbox {
        &__tool-icon {
          font-size: 32px;
          color: ${colors.neutral[500]};
        }
        &__divider {
          display: block;
          height: 80px;
          width: 1px;
          margin: 0px 16px;
          background-color: ${colors.neutral[300]};
        }
      }
    `;
  }}
`;
