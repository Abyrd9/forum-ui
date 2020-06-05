import styled, { css, keyframes } from "styled-components";

const start = keyframes`
  from {
    transform: translateY(24px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const end = keyframes`
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(24px);
    opacity: 0;
  }
`;

export const NotificationStyled = styled.div`
  ${({ theme = {} }) => {
    return css`
      animation: ${({ show }) => (show ? start : end)} 1s
        cubic-bezier(0.1, 0.65, 0.45, 1) forwards;
      position: fixed;
      bottom: ${({ bottom }) => bottom || "24px"};
      right: 24px;
      padding: 24px 42px 24px 24px;
      max-width: 600px;
      background-color: red;
      .notification-close-icon {
        cursor: pointer;
        position: absolute;
        top: 8px;
        right: 8px;
        height: 16px;
        width: 16px;
        path {
          fill: #ffffff;
        }
      }
    `;
  }}
`;
