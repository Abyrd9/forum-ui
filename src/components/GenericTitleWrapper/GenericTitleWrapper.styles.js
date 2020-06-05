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

export const LoadingState = styled.div`
  ${({ theme = {}, minHeight = 0 }) => {
    const { spacing = {} } = theme;
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: ${spacing[400]};
      ${minHeight && `min-height: ${minHeight}px;`}
    `;
  }}
`;
