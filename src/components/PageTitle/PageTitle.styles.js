import styled, { css } from "styled-components";

export const PageTitleContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { colors = {} } = theme;
    return css`
      .page-title {
        &__title {
          color: ${colors.primary[400]};
          margin-bottom: 4px;
        }
      }
    `;
  }}
`;
