import styled, { css } from 'styled-components';

export const FooterStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, spacing = {}, font = {}, media = {} } = theme;
    return css`
      position: absolute;
      top: calc(100% - 100px);
      width: 100%;
      height: 100px;
      background-color: ${colors.neutral[800]};
      display: flex;
      align-items: center;
      justify-content: center;
      .all-rights-reserved {
        text-transform: uppercase;
      }
      .divider {
        width: 1px;
        height: 16px;
        background-color: ${colors.white};
        margin: ${spacing[500]};
        ${media.tablet.down} {
          margin: ${spacing[300]};
        }
      }
      p {
        color: ${colors.white};
        font-size: ${font[300]};
        ${media.tablet.down} {
          font-size: ${font[200]};
        }
      }
    `;
  }}
`;
