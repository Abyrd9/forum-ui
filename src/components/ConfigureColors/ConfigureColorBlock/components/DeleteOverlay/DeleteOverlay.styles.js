import styled, { css } from 'styled-components';

export const DeleteOverlayContainer = styled.div`
  ${({ theme = {}, mounted = false }) => {
    const { colors = {}, spacing = {}, zIndex = {} } = theme;
    return css`
      z-index: ${zIndex[500]};
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      top: -2px;
      left: -2px;
      background-color: ${colors.white};
      border-radius: 4px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-5px);
      transition: opacity 150ms ease, transform 150ms ease, visibility 0ms linear 150ms;
      ${mounted &&
        `
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);
        transition: visibility 0ms linear, opacity 150ms ease, transform 150ms ease;
      `};
      .delete-text {
        text-align: center;
        max-width: 220px;
        margin-bottom: ${spacing[300]};
        line-height: 1.2;
      }
      .button-container {
        button:first-child {
          margin-right: ${spacing[200]};
        }
      }
    `;
  }}
`;
