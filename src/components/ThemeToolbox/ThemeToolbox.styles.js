import styled, { css } from "styled-components";

export const ThemeToolboxStyled = styled.div`
  ${({ theme = {} }) => {
    const { media = {}, colors = {}, spacing = {}, font = {} } = theme;
    return css`
      display: flex;
      align-items: center;
      padding: 12px 24px;
      border-radius: 5px;
      width: fit-content;
      background-color: ${colors.neutral[100]};
      .toolbox {
        &__tool-icon {
          font-size: 32px;
          color: ${colors.neutral[500]};
        }
        &__divider {
          display: block;
          height: 80px;
          width: 1px;
          margin: 0px 16px;
          background-color: ${colors.neutral[300]};
        }
      }
      .toolbox-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .tooltip-content {
          background-color: ${colors.neutral[800]};
          border-radius: 5px;
        }
        &__item {
          margin-right: 14px;
          &:last-child {
            margin-right: 0;
          }
          ${media.mobile.down} {
            margin-top: 4px;
            margin-bottom: 4px;
          }
        }
        &__tooltip-content {
          font-size: ${font[300]};
          width: max-content;
          color: #ffffff;
        }
        &__button {
          padding: 0px;
          width: 60px;
          height: 60px;
        }
        &__icon {
          font-size: 20px;
        }
      }
    `;
  }}
`;

export const ModalContent = styled.div`
  ${({ theme = {} }) => {
    const { spacing = {} } = theme;
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      .modal-title {
        margin-bottom: ${spacing[300]};
      }
      .button-container {
        display: flex;
        button:first-child {
          margin-right: 10px;
        }
      }
    `;
  }}
`;
