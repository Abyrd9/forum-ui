import styled, { css } from 'styled-components';

export const DeleteOverlayContainer = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, spacing = {} } = theme;
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: ${colors.white};
      border-radius: 4px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      .delete-text {
        text-align: center;
        max-width: 220px;
        margin-bottom: ${spacing[300]};
      }
      .button-container {
        button:first-child {
          margin-right: ${spacing[200]};
        }
      }
    `;
  }}
`;
