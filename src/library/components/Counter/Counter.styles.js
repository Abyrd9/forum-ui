import styled, { css } from 'styled-components';

export const CounterContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { colors = {}, spacing = {} } = theme;

    return css`
      display: flex;
      align-items: center;
      .forum-ui-counter-button {
        transition: all 200ms ease-in-out;
        cursor: pointer;
        height: 40px;
        width: 40px;
        border-radius: 100%;
        padding: 0;
        border: 2px solid ${colors.neutral[200]};
        background-color: ${colors.white};
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: 12px;
          path {
            fill: ${colors.neutral[600]};
          }
        }
        &:focus,
        &:hover {
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.2);
          outline: none;
        }
        &:active {
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.1);
        }
        &:disabled {
          cursor: default;
          box-shadow: none;
          border: 2px solid ${colors.neutral[300]};
          background-color: ${colors.neutral[200]};
          svg path {
            fill: ${colors.neutral[300]};
          }
        }
      }
      .forum-ui-counter-input-label {
        cursor: text;
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        margin: 0px ${spacing[100]};
        width: 65px;
        height: 55px;
        border-radius: 15px;
        border: 2px solid ${colors.neutral[200]};
        background-color: ${colors.white};
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
        display: flex;
        justify: center;
        align-items: center;
        &--is-disabled {
          cursor: default;
          border: 2px solid ${colors.neutral[300]};
          background-color: ${colors.neutral[200]};
          box-shadow: none;
        }
        &--read-only {
          cursor: default;
        }
        &:focus-within {
          &:before {
            opacity: 1;
          }
          input {
            outline: none;
          }
        }
        &:before {
          transition: all 200ms ease-in-out;
          opacity: 0;
          display: inline-block;
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          width: 67px;
          height: 58px;
          border-radius: 15px;
          background-color: transparent;
          box-shadow: 0 0 5px ${colors.primary[400]};
        }
      }
      .forum-ui-counter-input {
        background-color: transparent;
        width: 100%;
        text-align: center;
        &:disabled {
          color: ${colors.neutral[300]};
        }
      }
    `;
  }}
`;
