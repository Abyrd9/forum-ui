import styled, { css } from "styled-components";

export const TypographyFamilyStyled = styled.div`
  ${({ theme = {}, fontFamily = "" }) => {
    const { colors = {}, spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[500]};
      .title {
        color: ${colors.neutral[400]};
        margin-bottom: 8px;
      }
      .font-family {
        font-family: ${fontFamily};
        font-size: 18px;
        font-weight: bold;
        color: ${colors.neutral[800]};
      }
    `;
  }}
`;
