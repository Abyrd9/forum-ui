import styled, { css } from "styled-components";

export const NavigationContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
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
          margin-left: ${spacing[200]};
          display: flex;
          align-items: center;
          position: relative;
          ${media.tablet.up} {
            margin-left: ${spacing[500]};
          }
          .icon {
            margin-left: 8px;
            display: inline;
            height: 14px;
            width: auto;
            color: ${colors.neutral[800]};
            ${media.tablet.up} {
              height: 16px;
            }
          }
        }
        &__divider {
          width: 1px;
          height: 36px;
          margin-left: ${spacing[200]};
          background-color: ${colors.neutral[400]};
          ${media.tablet.up} {
            margin-left: ${spacing[500]};
          }
        }
        &__link-text {
          color: ${colors.neutral[800]};
          text-transform: capitalize;
          font-weight: 400;
          font-size: 14px;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          ${media.tablet.up} {
            font-size: 16px;
          }
          p {
            font-size: 14px;
            ${media.tablet.up} {
              font-size: 16px;
            }
          }
          .icon {
            margin-left: 6px;
          }
          &:hover {
            color: ${colors.primary[400]};
            p,
            .icon {
              color: ${colors.primary[400]};
            }
          }
        }
      }
    `;
  }}
`;
