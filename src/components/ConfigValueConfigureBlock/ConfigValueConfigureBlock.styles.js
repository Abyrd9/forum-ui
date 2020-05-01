import styled, { css } from "styled-components";

export const ConfigValueConfigureBlockStyled = styled.div`
  ${({ theme = {} }) => {
    const { media = {}, colors = {}, spacing = {}, font = {} } = theme;
    return css`
      .configure-block-edit-container {
        display: flex;
        align-items: center;
        margin-bottom: ${spacing[200]};
        flex-wrap: wrap;
        .forum-ui-tabs-list {
          margin-right: 24px;
          ${media.mobile.down} {
            margin-bottom: ${spacing[200]};
          }
        }
        .icon {
          cursor: pointer;
          color: ${colors.neutral[800]};
          margin-left: 24px;
          font-size: 24px;
        }
      }
      .configure-block-description {
        max-width: 560px;
        min-height: 55px;
        font-size: ${font[300]};
        margin-bottom: ${spacing[400]};
      }
    `;
  }}
`;
