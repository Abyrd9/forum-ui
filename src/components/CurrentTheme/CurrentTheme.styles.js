import styled, { css } from "styled-components";

export const CurrentThemeStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, spacing = {}, font = {} } = theme;
    return css`
      .title {
        text-transform: capitalize;
        font-size: ${font[300]};
        color: ${colors.neutral[400]};
        margin-bottom: ${spacing[100]};
      }
      .theme-name {
        font-weight: 400;
        font-size: ${font[700]};
        margin-bottom: ${spacing[200]};
      }
      .divider-line {
        display: block;
        height: 1px;
        width: 100%;
        background-color: ${colors.neutral[200]};
        margin-bottom: ${spacing[300]};
      }
      .button-container {
        display: flex;
        align-items: center;
        button:nth-child(1) {
          margin-right: 16px;
        }
      }
    `;
  }}
`;
