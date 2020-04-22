import styled, { css } from "styled-components";
import chroma from "chroma-js";

export const TypographyParagraphStyled = styled.div`
  ${({ theme = {}, fontFamily = "" }) => {
    const { media = {}, colors = {}, font = {}, spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[400]};
      .typography-title {
        margin-bottom: ${spacing[300]};
        color: ${chroma(colors.black).brighten(2)};
      }
      .typography-paragraph-text {
        font-family: ${fontFamily};
        margin-bottom: ${spacing[200]};
        ${media.tablet.down} {
          font-size: ${font[300]};
        }
      }
    `;
  }}
`;
