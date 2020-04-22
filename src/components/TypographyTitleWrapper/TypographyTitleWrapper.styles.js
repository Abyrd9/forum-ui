import styled, { css } from "styled-components";
import chroma from "chroma-js";

export const TypographyTitleWrapperStyled = styled.div`
  ${({ theme = {} }) => {
    const { spacing = {}, colors = {} } = theme;
    return css`
      margin-bottom: ${spacing[400]};
      .typography-title {
        margin-bottom: ${spacing[300]};
        color: ${chroma(colors.black).brighten(2)};
      }
    `;
  }}
`;
