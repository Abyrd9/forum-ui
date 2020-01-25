import styled, { css } from 'styled-components';
import Button from '../../../../library/Button';

export const SocialSignInButtonStyled = styled(Button)`
  ${({ theme = {}, color }) => {
    return css`
      font-weight: 400;
      border-radius: 2px;
      padding: 2px 12px 2px 2px;
      justify-content: flex-start;
      .text {
        color: inherit;
        font-family: 'Roboto', sans-serif;
        width: 100%;
        text-align: center;
      }
      .white-tile {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        height: 32px;
        width: 32px;
        svg {
          height: auto;
          width: 20px;
        }
      }
    `;
  }}
`;
