import styled, { css } from 'styled-components';

export const FontLegendStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, font = {}, spacing = {}, media = {} } = theme;
    return css`
      ${media.sm.down} {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
      .font-legend-title {
        font-size: ${font[500]};
        font-weight: 800;
        ${media.sm.down} {
          display: none;
        }
        span {
          color: ${colors.neutral[300]};
        }
      }
      .font-legend-item {
        display: flex;
        align-items: center;
        font-size: ${font[500]};
        font-weight: 800;
        border-bottom: 1px solid ${colors.neutral[300]};
        ${media.sm.down} {
          padding-right: ${spacing[100]};
          margin-right: ${spacing[100]};
          margin-bottom: ${spacing[300]};
          border: none;
          border-right: 1px solid ${colors.neutral[300]};
          flex-direction: column;
          align-items: flex-start;
        }
        &__key,
        &__value {
          ${media.sm.down} {
            font-size: ${font[300]};
          }
        }
        &__divider {
          display: inline-block;
          height: 22px;
          width: 1px;
          background-color: ${colors.neutral[300]};
          margin: ${spacing[200]} ${spacing[300]};
          ${media.sm.down} {
            height: 1px;
            width: 22px;
            margin: ${spacing[200]} auto;
          }
        }
        &__value {
          font-weight: 400;
        }
        &:last-child {
          border: none;
        }
      }
    `;
  }}
`;
