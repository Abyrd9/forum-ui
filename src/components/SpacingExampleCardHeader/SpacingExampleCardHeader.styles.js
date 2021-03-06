import styled, { css } from "styled-components";

export const SpacingExampleCardHeaderStyled = styled.div`
  ${({ theme = {} }) => {
    const { spacing = {}, colors = {}, media = {} } = theme;
    return css`
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: ${spacing[400]};
      .header-title {
        color: ${colors.neutral[400]};
        ${media.mobile.down} {
          font-size: 24px;
        }
      }
      .toggle-container {
        display: flex;
        align-items: flex-end;
        margin-right: 10%;
        ${media.tablet.down} {
          margin-right: 15%;
        }
        ${media.mobile.down} {
          margin-right: 20%;
        }
        ${media.xsMobile.down} {
          margin-right: 0;
        }
        &__label {
          font-weight: bold;
          color: ${colors.neutral[600]};
          margin-right: ${spacing[100]};
          ${media.mobile.down} {
            display: none;
          }
        }
      }
    `;
  }}
`;
