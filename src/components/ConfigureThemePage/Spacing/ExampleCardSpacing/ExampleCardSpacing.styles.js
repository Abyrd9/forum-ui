import styled, { css } from 'styled-components';
import chroma from 'chroma-js';

export const ExampleCardSpacingStyled = styled.div`
  ${({ theme = {}, space = '', position = '', width = '' }) => {
    return css`
      display: flex;
      align-items: center;
      width: 100%;
      background-color: ${chroma('red').alpha(0.25)};
      height: ${space};
      position: relative;
      .line {
        height: 1px;
        background-color: red;
        width: ${width};
        position: absolute;
        left: 50%;
      }
      .space {
        position: absolute;
        right: -${position};
      }
    `;
  }}
`;