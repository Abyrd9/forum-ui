import styled, { css } from 'styled-components';

export const AddButtonContainer = styled.button`
  ${props => {
    const { theme = {} } = props;
    const { colors = {} } = theme;
    return css`
      position: relative;
      cursor: pointer;
      border: none;
      outline: none;
      background-color: transparent;
      height: auto;
      width: auto;
      display: inline-flex;
      padding: 4px 14px;
      border-radius: 4px;
      background-color: ${colors.success[400]};
      &:before {
        transition: all 100ms ease-in-out;
        opacity: 0;
        display: inline-block;
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        border-radius: 4px;
        background-color: transparent;
        box-shadow: 0 0 3px ${colors.success[600]}, 0 0 5px ${colors.success[600]};
      }
      &:not(:disabled):focus {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
        &:before {
          opacity: 1;
        }
      }
      &:not(:disabled):hover {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
      }
      &:not(:disabled):active {
        box-shadow: none;
      }
      &:disabled {
        cursor: default;
        background-color: ${colors.neutral[300]};
        .add-icon path {
          fill: ${colors.neutral[500]};
        }
      }
      .add-icon {
        height: 14px;
        width: auto;
        path {
          fill: ${colors.white};
        }
      }
    `;
  }}
`;
