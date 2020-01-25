import styled, { css } from 'styled-components';

export const InputStyled = styled.div`
  ${({ theme = {}, info = {} }) => {
    const { colors = {}, spacing = {}, font = {} } = theme;
    const { show = false, color = '' } = info;
    return css`
      position: relative;
      width: 100%;
      margin-bottom: ${show ? 0 : spacing[400]};
      & + .forum-ui-input-info {
        margin-top: 4px;
        margin-bottom: ${spacing[400]};
        font-size: ${font[200]};
        color: ${color};
        max-width: 75%;
        margin-left: auto;
        text-align: right;
      }
      .forum-ui-input-label {
        box-sizing: border-box;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border: 1px solid ${show ? color : colors.neutral[200]};
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
          border: 1px solid rgba(0, 0, 0, 0);
          border-bottom-right-radius: 0px;
          border-bottom-left-radius: 0px;
          border-bottom: 1px solid ${colors.neutral[200]};
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        }
        &:focus-within {
          .forum-ui-input-placeholder {
            transform: translateY(-0.6em) scale(0.6);
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
        transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
        transform-origin: left;
        color: ${colors.neutral[800]};
        position: absolute;
        left: calc(1em + 0.5px);
        user-input: none;
        &--is-disabled {
          color: ${colors.neutral[300]};
        }
        &--is-active {
          transform: translateY(-0.6em) scale(0.6);
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
