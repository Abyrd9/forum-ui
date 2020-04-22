import styled, { css } from 'styled-components';
import chroma from 'chroma-js';

export const ExampleCardSpacingStyled = styled.div`
  ${({ theme = {}, spacingValue = '', showSpacing = true, position = '', width = '' }) => {
    const { media = {} } = theme;
    return css`
      transition: opacity 150ms ease-in;
      opacity: ${showSpacing ? 1 : 0};
      display: flex;
      align-items: center;
      width: 100%;
      background-color: ${chroma('red').alpha(0.05)};
      height: ${spacingValue};
      position: relative;
      .line {
        height: 1px;
        background-color: ${chroma('red').alpha(0.25)};
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
        ${media.xsMobile.down} {
          display: none;
        }
        span {
          font-size: 12px;
        }
      }
    `;
  }}
`;
