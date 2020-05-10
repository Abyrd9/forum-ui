import styled, { css } from "styled-components";

export const NavigationContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
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
            margin-left: 8px;
            display: inline;
            height: 18px;
            width: auto;
            color: ${colors.neutral[800]};
          }
        }
        &__link-text {
          transition: all 250ms ease-in;
          color: ${colors.neutral[800]};
          font-size: ${font[300]};
          text-transform: uppercase;
          font-weight: 400;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          &:hover {
            color: ${colors.primary[400]};
            p,
            .icon {
              color: ${colors.primary[400]};
            }
          }
          &--button {
            color: #ffffff;
            padding: 6px 8px;
            border-radius: 4px;
            background-color: ${colors.primary[400]};
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
            &:hover {
              text-decoration: none;
              color: #ffffff;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16),
                0 2px 3px rgba(0, 0, 0, 0.23);
            }
          }
        }
      }
    `;
  }}
`;
