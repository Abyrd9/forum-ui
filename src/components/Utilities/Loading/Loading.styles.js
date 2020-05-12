import styled, { css } from "styled-components";

export const LoadingStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, zIndex = {} } = theme;
    return css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: ${colors.white};
      z-index: ${zIndex[800]};
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
