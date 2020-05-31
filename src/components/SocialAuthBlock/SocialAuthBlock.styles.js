import styled, { css } from "styled-components";

export const SocialAuthBlockStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {} } = theme;
    return css`
      .social-auth-divider {
        display: flex;
        align-items: center;
        &__text {
          font-size: 12px;
          font-weight: bold;
          color: ${colors.neutral[600]};
          margin-right: 8px;
        }
        &__divider-line {
          height: 1px;
          width: 145px;
          background-color: ${colors.neutral[400]};
        }
      }
      .social-button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 14px;
        width: 100%;
        transition: all 100ms cubic-bezier(0, 0, 0.2, 1);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
        border: none;
        outline: none;
        border-radius: 4px;
        font-size: 16px;
        p,
        b {
          color: #ffffff;
        }
        &__logo-container {
          height: 30px;
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          border-radius: 100%;
        }
        &__logo--google {
          height: 18px;
        }
        &__logo--github {
          height: 20px;
        }
        &--google {
          background-color: #4285f4;
          &:hover {
            background-color: #2b77f3;
          }
        }
        &--github {
          background-color: #211f1f;
          &:hover {
            background-color: #151414;
          }
        }
      }
    `;
  }}
`;
