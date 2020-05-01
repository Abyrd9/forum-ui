import styled, { css } from "styled-components";

export const GenericTitleWrapperStyled = styled.div`
  ${({ theme = {} }) => {
    const { spacing = {}, colors = {} } = theme;
    return css`
      margin-bottom: ${spacing[400]};
      .typography-title {
        margin-bottom: ${spacing[300]};
        color: ${colors.neutral[400]};
      }
    `;
  }}
`;
