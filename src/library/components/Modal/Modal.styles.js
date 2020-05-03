import styled, { css } from "styled-components";

export const ModalStyled = styled.div`
  ${props => {
    const { visible } = props;
    return css`
      position: fixed;
      height: 100vh;
      top: 0;
      left: 0;
      opacity: ${visible ? "1" : "0"};
      visibility: ${visible ? "visible" : "hidden"};
      width: 100vw;
      z-index: ${visible ? 2147483647 : -2147483647};
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      .modal__content {
        position: relative;
        border-radius: 5px;
        background-color: #ffffff;
        padding: 24px 18px;
        padding-top: 48px;
        .times-icon {
          cursor: pointer;
          height: 24px;
          position: absolute;
          top: 10px;
          right: 10px;
        }
      }
    `;
  }}
`;
