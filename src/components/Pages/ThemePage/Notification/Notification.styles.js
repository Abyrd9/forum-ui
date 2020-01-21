import styled, { css } from 'styled-components';

export const NotificationStyled = styled.div`
  ${({ theme = {}, showMessage = false, }) => {
    const { colors = {}, font = {} } = theme;
    return css`
      position: absolute;
      text-align: center;
      font-size: ${font[300]};
      width: 95px;
      right: calc(100% + 10px);
      padding: 8px 12px;
      border-radius: 2px;
      background-color: ${colors.white};
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      opacity: ${showMessage ? 1 : 0};
      transform: ${showMessage ? 'translateY(0px)' : 'translateY(3px)'};
      transition: all 150ms ease-in-out;
    `;
  }}
`;