import styled, { css } from "styled-components";

export const InputStyled = styled.div`
  ${({ theme = {}, info = {} }) => {
    const { colors = {}, spacing = {}, font = {} } = theme;
    const { hasMssg = false, show = false, color = "" } = info;
    return css`
      position: relative;
      width: 100%;
      margin-bottom: ${hasMssg ? 0 : spacing[400]};
      & + .forum-ui-input-info {
        transition: opacity 150ms cubic-bezier(0, 0, 0.2, 1);
        margin-top: 4px;
        margin-bottom: ${spacing[300]};
        font-size: ${font[300]};
        color: ${color};
        max-width: 75%;
        margin-left: auto;
        text-align: right;
        opacity: ${show ? 1 : 0};
      }
      .forum-ui-input-label {
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1),
          border 150ms cubic-bezier(0, 0, 0.2, 1);
        border: 1px solid ${show ? color : colors.neutral[200]};
        box-sizing: border-box;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border-radius: 4px;
        background-color: #ffffff;
        height: 55px;
        padding: 0 1em;
        cursor: text;
        &--read-only {
          cursor: pointer;
        }
        &--is-disabled {
          cursor: default;
          background-color: ${colors.neutral[100]};
          border: 1px solid ${colors.neutral[300]};
        }
        &--is-active {
          border: 1px solid ${show ? color : colors.neutral[400]};
        }
        &:focus-within {
          border: 1px solid ${show ? color : colors.neutral[400]};
          .forum-ui-input-placeholder {
            color: ${colors.neutral[600]};
            transform: translateY(-0.7em) scale(0.6);
          }
        }
      }
      .forum-ui-input {
        background-color: transparent;
        margin-top: 1em;
        width: 100%;
        &:active,
        &:focus {
          outline: none;
        }
        &--read-only {
          cursor: pointer;
        }
      }
      .forum-ui-input-placeholder {
        transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
        transform-origin: left;
        color: ${colors.neutral[400]};
        position: absolute;
        left: calc(1em + 0.5px);
        user-input: none;
        &--is-disabled {
          color: ${colors.neutral[300]};
        }
        &--is-active {
          color: ${colors.neutral[600]};
          transform: translateY(-0.7em) scale(0.6);
        }
      }
      .forum-ui-input-icon {
        margin-left: ${spacing[200]};
        transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
        svg {
          width: ${font[400]};
          path {
            fill: ${show ? color : colors.neutral[600]};
          }
        }
        &--is-disabled {
          svg path {
            fill: ${colors.neutral[300]};
          }
        }
      }
    `;
  }}
`;
