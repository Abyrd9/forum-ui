import styled, { css } from 'styled-components';

export const NotificationStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, font = {} } = theme;
    return css`
      position: absolute;
      text-align: center;
      font-size: ${font[300]};
      width: fit-content;
      right: calc(100% + 10px);
      padding: 8px 12px;
      border-radius: 2px;
      white-space: nowrap;
      background-color: ${colors.white};
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      transition: all 150ms ease-in-out;
    `;
  }}
`;
