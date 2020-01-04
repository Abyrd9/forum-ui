import styled, { css } from 'styled-components';

export const FontLegendStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, font = {}, spacing = {} } = theme;
    return css`
      .font-legend-title {
        font-size: ${font[500].size};
        font-weight: 800;
        span {
          color: ${colors.neutral[300]};
        }
      }
      .font-legend-item {
        display: flex;
        align-items: center;
        font-size: ${font[500].size};
        font-weight: 800;
        &__key {
        }
        &__divider {
          display: inline-block;
          height: 22px;
          width: 1px;
          background-color: ${colors.neutral[300]};
          margin: ${spacing[200]} ${spacing[300]};
        }
        &__value {
          font-weight: 400;
        }
        border-bottom: 1px solid ${colors.neutral[300]};
        &:last-child {
          border: none;
        }
      }
    `;
  }}
`;
