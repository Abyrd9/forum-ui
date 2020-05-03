import styled, { css } from "styled-components";

export const NavigationContainer = styled.div`
  ${props => {
    const { theme = {}, active } = props;
    const { spacing = {}, colors = {}, media = {} } = theme;
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
