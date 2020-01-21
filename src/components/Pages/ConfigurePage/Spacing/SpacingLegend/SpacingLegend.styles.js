import styled, { css } from 'styled-components';

export const SpacingLegendStyled = styled.div`
  ${({ theme = {} }) => {
    const { font = {}, colors = {}, spacing = {}, media = {} } = theme;
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 800px;
      ${media.sm.down} {
        flex-wrap: wrap;
        justify-content: flex-start;
      }
      .spacing-legend-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: ${font[500]};
        font-weight: 800;
        ${media.sm.down} {
          padding-right: ${spacing[100]};
          margin-right: ${spacing[100]};
          margin-bottom: ${spacing[300]};
          border-right: 1px solid ${colors.neutral[300]};
          align-items: flex-start;
        }
        &__key,
        &__value {
          ${media.sm.down} {
            font-size: ${font[300]};
          }
        }
        &__divider {
          display: block;
          height: 1px;
          width: 22px;
          background-color: ${colors.neutral[300]};
          margin: ${spacing[200]} ${spacing[300]};
          ${media.sm.down} {
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
      .spacing-legend-divider {
        display: inline-block;
        width: 1px;
        height: 100px;
        background-color: ${colors.neutral[300]};
        ${media.sm.down} {
          display: none;
        }
      }
    `;
  }}
`;
