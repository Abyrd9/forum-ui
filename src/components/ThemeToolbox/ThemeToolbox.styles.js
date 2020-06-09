import styled, { css } from "styled-components";

export const ThemeToolboxStyled = styled.div`
  ${({ theme = {} }) => {
    const { media = {}, colors = {}, font = {} } = theme;
    return css`
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

export const ToolboxModalContentStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, spacing = {} } = theme;
    return css`
      max-width: 460px;
      .toolbox-modal-header {
        margin-top: -24px;
        margin-bottom: ${spacing[200]};
        border-bottom: 1px solid ${colors.neutral[400]};
        &__title {
          margin-bottom: ${spacing[200]};
        }
      }
      .toolbox-modal-content {
        &__content {
          color: ${colors.neutral[800]};
          margin-bottom: ${spacing[400]};
        }
        &__button-container {
          margin: 0px -18px -24px;
          background-color: ${colors.neutral[100]};
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &__button {
          &:first-child {
            margin-right: 18px;
          }
        }
      }
    `;
  }}
`;
