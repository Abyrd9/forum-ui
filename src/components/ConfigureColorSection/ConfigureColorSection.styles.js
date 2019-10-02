import styled, { css } from 'styled-components';

export const ConfigureColorSectionContainer = styled.div`
  ${props => {
    const { theme } = props;
    const { spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[600]};
    `;
  }}
`;
