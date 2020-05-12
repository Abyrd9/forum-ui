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
      .theme-input-name {
        font-weight: bold;
        font-size: ${font[700]};
        margin-bottom: ${spacing[200]};
        border-bottom: 1px solid rgba(0, 0, 0, 0);
        font-family: "Josefin Sans", sans-serif;
        outline: none;
        &:focus,
        &:active {
          border-bottom: 1px solid ${colors.neutral[400]};
        }
      }
      .theme-name {
        font-weight: bold;
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
    `;
  }}
`;
