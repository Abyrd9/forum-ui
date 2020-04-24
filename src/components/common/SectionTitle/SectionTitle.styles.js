import styled, { css } from "styled-components";

export const SectionTitleContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { colors = {}, spacing = {} } = theme;
    return css`
      .block-title {
        &__title {
          margin-bottom: ${spacing[100]};
        }
        &__divider {
          display: block;
          height: 1px;
          width: 245px;
          background-color: ${colors.neutral[200]};
          margin: ${spacing[100]} 0;
        }
        &__description {
          max-width: 640px;
          white-space: pre-wrap;
          margin-bottom: ${spacing[500]};
        }
      }
    `;
  }}
`;
