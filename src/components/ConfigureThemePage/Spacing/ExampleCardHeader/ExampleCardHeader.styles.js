import styled, { css } from 'styled-components';

export const ExampleCardHeaderStyled = styled.div`
  ${({ theme = {} }) => {
    const { spacing = {} } = theme;
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: ${spacing[400]};
      .header-title {
      }
      .toggle-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        &__label {
          margin-bottom: ${spacing[100]};
        }
      }
    `;
  }}
`;
