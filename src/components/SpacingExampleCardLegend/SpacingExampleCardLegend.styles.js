import styled, { css } from "styled-components";

export const SpacingExampleCardLegendStyled = styled.div`
  ${({
    theme = {},
    spacingValue = "",
    showSpacing = true,
    position = "",
    width = ""
  }) => {
    const { media = {}, colors = {} } = theme;
    return css`
      transition: opacity 150ms ease-in;
      opacity: ${showSpacing ? 1 : 0};
      display: flex;
      align-items: center;
      width: 100%;
      background-color: ${colors.primary[100]};
      height: ${spacingValue};
      position: relative;
      .line {
        height: 1px;
        background-color: ${colors.primary[300]};
        width: ${width};
        position: absolute;
        left: 50%;
        ${media.xsMobile.down} {
          display: none;
        }
      }
      .spacing {
        position: absolute;
        right: -${position};
        font-size: 14px;
        font-weight: 600;
        ${media.xsMobile.down} {
          display: none;
        }
        span {
          font-weight: 600;
          font-size: 10px;
        }
      }
    `;
  }}
`;
