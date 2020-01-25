import styled, { css } from 'styled-components';

export const SectionTitleContainer = styled.div`
  ${props => {
    const { theme = {}, hideDivider = false } = props;
    const { colors = {}, spacing = {} } = theme;
    return css`
      margin-bottom: ${hideDivider ? 0 : spacing[500]};
      .block-title {
        &__title {
          ${hideDivider && `margin-bottom: ${spacing[100]}`};
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
