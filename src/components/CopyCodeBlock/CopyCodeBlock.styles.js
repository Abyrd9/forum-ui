import styled, { css } from "styled-components";

export const CopyCodeBlockStyled = styled.div`
  position: relative;
  span {
    font-family: inherit;
  }
  .icon-container {
    position: absolute;
    right: 12px;
    top: 12px;
  }
  .icon {
    transition: all 150ms ease-in-out;
    cursor: pointer;
    color: rgb(156, 220, 254);
    height: 26px;
    width: auto;
    &:hover {
      color: rgb(200, 235, 255);
    }
  }
  .copy-portal {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;

export const CopyCodeNotification = styled.div`
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
