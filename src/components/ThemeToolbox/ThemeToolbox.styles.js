import styled, { css } from "styled-components";

export const ThemeToolboxStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {} } = theme;
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
        &__item {
          margin-right: 14px;
          &:last-child {
            margin-right: 0;
          }
        }
        &__button {
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
