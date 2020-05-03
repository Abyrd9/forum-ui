import styled, { css } from "styled-components";

export const ThemeVisualBlockStyled = styled.div`
  ${({ theme = {}, selected = false }) => {
    const { colors = {} } = theme;
    return css`
      cursor: pointer;
      position: relative;
      transition: all 100ms ease-in;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
      background-color: #ffffff;
      border-radius: 5px;
      width: 300px;
      border: ${selected
        ? `2px solid ${colors.success[400]}`
        : "2px solid rgba(0,0,0,0)"};
      .theme-block-header {
        cursor: default;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        background-color: ${colors.neutral[100]};
        padding: 16px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__theme-name {
          font-size: 20px;
        }
        &__trash-icon {
          cursor: pointer;
          font-size: 16px;
          color: ${colors.error[400]};
        }
      }
      .theme-block-content {
        padding: 16px 12px;
        &__title {
          font-size: 16px;
          margin-bottom: 4px;
        }
        &__divider {
          display: block;
          width: 100%;
          height: 1px;
          background-color: ${colors.neutral[200]};
          margin-bottom: 8px;
        }
        &__color-list {
          display: flex;
          align-items: center;
          margin-bottom: 4px;
        }
        &__more-text {
          width: 100%;
          text-align: right;
          font-size: 10px;
          font-weight: bold;
        }
      }
      .theme-block-footer {
        height: 24px;
        width: 100%;
        padding: 16px 12px;
        background-color: ${selected
          ? colors.success[400]
          : colors.neutral[100]};
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &__check-icon {
          font-size: 16px;
          color: ${selected ? "#ffffff" : colors.neutral[600]};
        }
      }
    `;
  }}
`;

export const ColorItem = styled.div`
  ${({ color = "" }) => {
    return css`
      background-color: ${color};
      height: 35px;
      flex: 1;
    `;
  }}
`;
