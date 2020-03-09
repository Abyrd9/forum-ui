import styled, { css } from 'styled-components';

export const AuthFormStyled = styled.div`
  ${({ theme = {} }) => {
    const { spacing = {}, colors = {} } = theme;
    return css`
      .divider {
        display: block;
        height: 1px;
        width: 145px;
        background-color: ${colors.neutral[200]};
        margin: ${spacing[500]} 0;
      }
    `;
  }}
`;
