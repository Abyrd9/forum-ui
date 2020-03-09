import styled, { css } from 'styled-components';

export const InputContainerContainer = styled.div`
  ${({ theme = {} }) => {
    const { spacing = {} } = theme;
    return css`
      width: 100%;
      margin-bottom: ${spacing[600]};
      .configuration-block-title {
        margin-bottom: 4px;
        text-transform: capitalize;
      }
    `;
  }}
`;
