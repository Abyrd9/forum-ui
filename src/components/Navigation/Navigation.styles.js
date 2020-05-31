import styled, { css } from "styled-components";

export const NavigationContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { spacing = {}, colors = {} } = theme;

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
          position: relative;
          .icon {
            margin-left: 8px;
            display: inline;
            height: 16px;
            width: auto;
            color: ${colors.neutral[800]};
          }
        }
        &__divider {
          width: 1px;
          height: 36px;
          margin-left: ${spacing[500]};
          background-color: ${colors.neutral[400]};
        }
        &__link-text {
          color: ${colors.neutral[800]};
          text-transform: capitalize;
          font-weight: 400;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
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
