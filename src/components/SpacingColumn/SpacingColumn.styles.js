import styled, { css } from "styled-components";
import chroma from "chroma-js";

export const SpacingColumnStyled = styled.ul`
  ${({ theme = {} }) => {
    const { media = {}, colors = {}, spacing = {} } = theme;
    return css`
      width: 110px;
      margin-top: 50px;
      .spacing-title {
        display: none;
        margin-bottom: ${spacing[300]};
        color: ${chroma(colors.black).brighten(2)};
      }
      ${media.mobile.down} {
        width: 100%;
        .spacing-title {
          display: block;
        }
      }
    `;
  }}
`;

export const SpacingBlock = styled.li`
  ${({ theme = {}, spacingSize = "0px" }) => {
    const { media = {}, colors = {}, font = {}, spacing = {} } = theme;
    return css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: ${spacing[100]};
      margin-bottom: ${spacing[100]};
      &:not(:last-child) {
        border-bottom: solid 1px ${colors.neutral[400]};
      }
      .block {
        width: 65px;
        height: ${spacingSize};
        background-color: ${colors.primary[100]};
        ${media.mobile.down} {
          width: 80%;
        }
      }
      .text {
        font-size: ${font[300]};
        font-weight: 600;
      }
    `;
  }}
`;
