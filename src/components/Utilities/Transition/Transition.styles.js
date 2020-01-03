import styled, { css, keyframes } from 'styled-components';

const enter = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const exit = keyframes`
    0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-5px);
  }
`;

export const TransitionStyled = styled.div`
  ${({ theme = {}, show = false }) => {
    const { zIndex = {} } = theme;
    return css`
      animation: 150ms ${show ? enter : exit};
      z-index: ${zIndex[500]};
      position: absolute;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      top: -2px;
      left: -2px;
    `;
  }}
`;
