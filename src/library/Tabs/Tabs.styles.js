import styled, { css } from 'styled-components';

export const TabsContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { colors = {} } = theme;
    return css`
      .forum-ui-tabs-list {
        display: flex;
        align-items: center;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
      }
      .forum-ui-tabs-list-item {
        &-button {
          padding: 18px 32px;
          background: transparent;
          position: relative;
          border: none;
          color: ${colors.neutral[800]};
          font-weight: bold;
          cursor: pointer;
          white-space: pre-wrap;
          &:after {
            transition: all 200ms ease-in-out;
            opacity: 0;
            display: inline-block;
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: calc(100%);
            height: 3px;
            background-color: ${colors.primary[400]};
          }
          &:before {
            transition: all 200ms ease-in-out;
            opacity: 0;
            display: inline-block;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: calc(100%);
            height: calc(100%);
            background-color: transparent;
            box-shadow: 0 0 5px ${colors.primary[400]};
          }
          &:focus {
            outline: none;
            &:before {
              opacity: 1;
            }
          }
          &:active,
          &--is-active {
            &:after {
              opacity: 1;
            }
          }
          &:hover {
            background-color: ${colors.primary[100]};
          }
        }
        &:first-child {
          button {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            &:before {
              border-top-left-radius: 4px;
              border-bottom-left-radius: 4px;
            }
            &:after {
              border-bottom-left-radius: 4px;
            }
          }
        }
        &:last-child {
          button {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            &:before {
              border-top-right-radius: 4px;
              border-bottom-right-radius: 4px;
            }
            &:after {
              border-bottom-right-radius: 4px;
            }
          }
        }
      }
    `;
  }}
`;
