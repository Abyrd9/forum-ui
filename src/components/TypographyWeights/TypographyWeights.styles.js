import styled, { css } from "styled-components";
import chroma from "chroma-js";

export const TypographyWeightsStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[400]};
      .typography-title {
        margin-bottom: ${spacing[300]};
        color: ${chroma(colors.black).brighten(2)};
      }
      .font-variant-list {
        display: flex;
        flex-wrap: wrap;
      }
    `;
  }}
`;

export const WeightBlock = styled.li`
  ${({ theme = {}, fontFamily = "", fontWeight = 400 }) => {
    const { font = {} } = theme;

    return css`
      display: inline;
      margin: 0px 24px 14px 0px;
      h3 {
        font-size: ${font[800]}
        font-weight: ${fontWeight};
        line-height: 1;
        font-family: ${fontFamily};
      }
      p {
        font-weight: ${fontWeight};
        line-height: 1;
        font-family: ${fontFamily};
        margin-bottom: 8px;
      }
    `;
  }}
`;
