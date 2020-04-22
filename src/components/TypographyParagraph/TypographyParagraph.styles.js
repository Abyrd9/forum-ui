import styled, { css } from "styled-components";

export const TypographyParagraphStyled = styled.div`
  ${({ theme = {}, fontFamily = "" }) => {
    const { media = {}, font = {}, spacing = {} } = theme;
    return css`
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
