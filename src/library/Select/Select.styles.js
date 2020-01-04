import styled, { css } from 'styled-components';

export const SelectContainer = styled.div`
  ${props => {
    const { theme = {}, info = {} } = props;
    const { colors = {}, spacing = {}, font = {} } = theme;
    const { show = false, color = '' } = info;
    return css`
      position: relative;
      width: 100%;
      margin-bottom: ${show ? 0 : spacing[400]};
      & + .forum-ui-select-info {
        margin-top: 4px;
        margin-bottom: ${spacing[400]};
        font-size: ${font[200].size};
        line-height: ${font[200].height};
        color: ${color};
        max-width: 75%;
        margin-left: auto;
        text-align: right;
      }
      .forum-ui-select-label {
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
      }
      .forum-ui-select-input {
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
      .forum-ui-select-placeholder {
        transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
        transform-origin: left;
        color: ${colors.neutral[800]};
        position: absolute;
        left: calc(1em + 0.5px);
        user-select: none;
        &--is-disabled {
          color: ${colors.neutral[300]};
        }
        &--is-active {
          transform: translateY(-0.6em) scale(0.6);
        }
      }
      .forum-ui-select-arrow {
        margin-left: ${spacing[200]};
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
        svg {
          width: 10px;
          path {
            fill: ${colors.neutral[600]};
          }
        }
        &--is-disabled {
          svg path {
            fill: ${colors.neutral[300]};
          }
        }
        &--is-active {
          transform: rotate(180deg) translateY(3px);
          svg path {
            fill: ${colors.neutral[800]};
          }
        }
      }
      .forum-ui-select-list {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        background-color: #ffffff;
        z-index: 1000;
        max-height: 160px;
        overflow-y: scroll;
        visibility: hidden;
        position: absolute;
        width: 100%;
        top: 100%;
        left: 0;
        &--is-active {
          visibility: visible;
        }
        &-item {
          height: 50px;
          border-bottom: 1px solid ${colors.neutral[200]};
          padding: 0 1em;
          display: flex;
          align-items: center;
          color: ${colors.neutral[800]};
          user-select: none;
          &:last-child {
            border: none;
          }
          &:hover {
            cursor: pointer;
            background-color: ${colors.primary[100]};
          }
          &--is-selected {
            background-color: ${colors.primary[400]};
            color: #ffffff;
            &:hover {
              background-color: ${colors.primary[400]};
            }
          }
        }
      }
    `;
  }}
`;
