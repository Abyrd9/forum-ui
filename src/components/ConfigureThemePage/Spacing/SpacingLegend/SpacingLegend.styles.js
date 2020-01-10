import styled, { css } from 'styled-components';

export const SpacingLegendStyled = styled.div`
  ${({ theme = {} }) => {
    const { font = {}, colors = {}, spacing = {}, media = {} } = theme;
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 800px;
      .spacing-legend-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: ${font[500].size};
        font-weight: 800;
        ${media.sm.down} {
          max-width: 45px;
        }
        &__key {
        }
        &__divider {
          display: block;
          height: 1px;
          width: 22px;
          background-color: ${colors.neutral[300]};
          margin: ${spacing[200]} ${spacing[300]};
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
      }
    `;
  }}
`;
