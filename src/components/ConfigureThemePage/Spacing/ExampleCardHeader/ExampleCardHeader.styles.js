import styled, { css } from 'styled-components';
import chroma from 'chroma-js';

export const ExampleCardHeaderStyled = styled.div`
  ${({ theme = {} }) => {
    const { spacing = {}, colors = {}, media = {} } = theme;
    return css`
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: ${spacing[400]};
      .header-title {
        color: ${chroma(colors.black).brighten(2)};
        ${media.sm.down} {
          font-size: 24px;
        }
      }
      .toggle-container {
        display: flex;
        align-items: flex-end;
        margin-right: 10%;
        ${media.md.down} {
          margin-right: 15%;
        }
        ${media.sm.down} {
          margin-right: 20%;
        }
        ${media.xs.down} {
          margin-right: 0;
        }
        &__label {
          font-weight: bold;
          color: ${chroma(colors.black).brighten(2)};
          margin-right: ${spacing[100]};
          ${media.sm.down} {
            display: none;
          }
        }
      }
    `;
  }}
`;
