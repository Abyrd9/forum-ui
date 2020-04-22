import styled, { css } from "styled-components";
import chroma from "chroma-js";

export const TypographySizeStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[400]};
      .typography-title {
        margin-bottom: ${spacing[300]};
        color: ${chroma(colors.black).brighten(2)};
      }
    `;
  }}
`;

export const SizeBlock = styled.h2`
  ${({ theme = {}, fontFamily = "", fontSize = "" }) => {
    const { spacing = {} } = theme;
    return css`
      line-height: normal;
      margin-bottom: ${spacing[100]};
      font-family: ${fontFamily};
      font-size: ${fontSize};
    `;
  }}
`;
