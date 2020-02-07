import styled, { css } from 'styled-components';

export const LoadingStyled = styled.div`
  ${({ theme = {}, minHeight }) => {
    const { colors = {}, zIndex = {} } = theme;
    const height = typeof minHeight === 'number' ? `${minHeight}px` : minHeight;
    return css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ${height || '100%'};
      background-color: ${colors.white};
      z-index: ${zIndex[500]};
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        height: 60px;
        width: 60px;
      }
    `;
  }}
`;
