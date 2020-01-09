import styled, { css } from 'styled-components';

export const TypographySectionContainer = styled.div`
  ${props => {
    const { theme = {}, familyCSS = '' } = props;
    return css`
      position: relative;
      .typography-configurations {
        &__copy-container {
          p {
            font-family: ${familyCSS};
          }
        }
      }
    `;
  }}
`;