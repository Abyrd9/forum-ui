import styled, { css } from "styled-components";

export const TypographySizeStyled = styled.div`
  ${({ theme = {} }) => {
    const { spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[500]};
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
