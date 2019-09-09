import styled, { css } from 'styled-components';

export const PageTitleContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { colors = {}, spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[700]};
      .page-title {
        &__title {
          color: ${colors.secondary[400]};
          margin-bottom: 4px;
        }
      }
    `;
  }}
`;
