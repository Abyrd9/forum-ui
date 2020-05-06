import styled, { css } from "styled-components";

export const NavigationContainer = styled.div`
  ${props => {
    const { theme = {}, active } = props;
    const { spacing = {}, colors = {}, font = {}, media = {} } = theme;
    return css`
      width: 100%;
      padding: ${spacing[400]} 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      margin-bottom: ${spacing[700]};
      overflow: hidden;
      .nav-bar {
        &__list {
          display: flex;
          align-items: center;
        }
        &__list-item {
          cursor: pointer;
          margin-left: ${spacing[500]};
          display: flex;
          align-items: center;
          .icon {
            height: 20px;
            width: auto;
            &--grid, &--user {
              width: 24px;
              height: auto;
            }
            color: ${colors.neutral[800]};
          }
        }
        &__divider {
          display: inline-block;
          height: 32px;
          width: 1px;
          background-color: ${colors.neutral[200]};
          margin-left: 34px;
        }
        &__link-text {
          color: ${colors.neutral[800]};
          font-size: ${font[300]};
          text-transform: uppercase;
          font-weight: 400;
          letter-spacing: 1px;
          &:hover {
            color: ${colors.primary[400]};
          }
          &--sign-up {
            color: #ffffff;
            padding: 6px 8px;
            border-radius: 4px;
            background-color: ${colors.primary[400]};
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            &:hover {
              text-decoration: none;
              color: #ffffff;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 3px rgba(0, 0, 0, 0.23);
            }
          }
        }
        &__list-toggle-container {
          display: none;
        }
      }
      ${media.tablet.down} {
        padding: ${spacing[400]};
        .nav-bar {
          &__icon {
            height: 37px;
            width: 35px;
          }
          &__list {
            background-color: ${colors.neutral[100]};
            padding: ${spacing[100]} ${spacing[400]};
            padding-right: ${spacing[600]}
            margin-right: -${spacing[400]};
            border-bottom-left-radius: 50px;
            border-top-left-radius: 50px;
            transition: transform 150ms ease-in, opacity 150ms ease-in 50ms;
            transform: ${active ? "translateX(0)" : "translateX(15px)"};
            opacity: ${active ? "1" : "0"};
          }
          &__list-item {
            margin-left: 0;
            margin-right: ${spacing[400]};
            p {
              display: none
            }
            svg {
              width: 24px;
            }
          }
          &__list-toggle-container {
            cursor: pointer;
            display: block;
            position: absolute;
            right: ${spacing[400]};
            padding-top: 16px;
          }
          &__list-toggle {
            display: block;
            position: relative;
            width: 35px;
            height: 3px;
            border-radius: 2px;
            transition: background-color 100ms ease-in-out;
            background-color: ${active ? colors.neutral[300] : colors.black};
            &:before, &:after {
              background-color: ${active ? colors.neutral[300] : colors.black};
              transition: transform 150ms ease-in-out, background-color 100ms ease;
              border-radius: 2px;
              position: absolute;
              display: block;
              content: '';
              height: 3px;
            }
            &:before {
              transform: ${active ? "translateX(0px)" : "translateX(20px)"};
              width: 15px;
              top: -16px;
            }
            &:after {
              transform: ${active ? "translateX(0px)" : "translateX(10px)"};
              width: 25px;
              top: -8px
            }
          }
        }
      }
      ${media.xsMobile.down} {
        padding: ${spacing[400]};
        .nav-bar {
          &__icon {
            height: 32px;
            width: 30px;
          }
          &__list-item {
            margin-left: 0;
            margin-right: ${spacing[300]};
            svg {
              width: 20px;
            }
          }
          &__list-toggle {
            width: 26px;
            height: 2px;
            &:before, &:after {
              height: 2px;
            }
            &:before {
              transform: ${active ? "translateX(0px)" : "translateX(12px)"};
              width: 14px;
              top: -12px;
            }
            &:after {
              transform: ${active ? "translateX(0px)" : "translateX(6px)"};
              width: 20px;
              top: -6px
            }
          }
        }
      }
    `;
  }}
`;
