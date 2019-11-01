import styled, { css } from 'styled-components';

export const ConfigureTypographySectionContainer = styled.div`
  ${props => {
    const { theme = {}, familyCSS = '' } = props;
    return css`
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
