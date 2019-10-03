import styled, { css } from 'styled-components';

export const BlockTitleContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { colors = {}, spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[500]};
      .block-title {
        &__title {
        }
        &__divider {
          display: block;
          height: 1px;
          width: 145px;
          background-color: ${colors.neutral[200]};
          margin: ${spacing[100]} 0;
        }
        &__description {
          max-width: 640px;
          white-space: pre-wrap;
        }
      }
    `;
  }}
`;
