import styled, { css } from "styled-components";

export const ConfigValueGridStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, spacing = {} } = theme;
    return css`
      display: flex;
      flex-wrap: wrap;
      .grid-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 8px;
        &:nth-child(1) {
          border-left: 1px solid ${colors.neutral[300]};
        }
        border-right: 1px solid ${colors.neutral[300]};
        .key {
          font-weight: 600;
          margin-bottom: ${spacing[100]};
        }
        .divider {
          display: block;
          width: 50px;
          height: 1px;
          background-color: ${colors.neutral[300]};
          margin-bottom: ${spacing[100]};
        }
        &--clear-border {
          border: none;
          &:nth-child(1) {
            border: none;
          }
        }
        &--selected {
          border: 2px solid ${colors.primary[400]};
          &:nth-child(1) {
            border: 2px solid ${colors.primary[400]};
          }
        }
        &--100 {
          &:nth-child(1) {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            border-right: 0;
          }
        }
        &--300 {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          border-left: 0;
        }
        &--400 {
          border-radius: 4px;
        }
        &--500 {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          border-right: 0;
        }
        &--600 {
          border-right: 0;
        }
        &--800 {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          border-left: 0;
        }
      }
    `;
  }}
`;
