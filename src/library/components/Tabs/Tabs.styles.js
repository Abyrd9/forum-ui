import styled, { css } from "styled-components";

export const TabsContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { colors = {}, media = {} } = theme;
    return css`
      .forum-ui-tabs-list {
        width: fit-content;
        display: flex;
        align-items: center;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        background: #f1f1f0;
      }
      .forum-ui-tabs-list-item {
        &-button {
          width: 100%;
          min-height: 62px;
          padding: 16px 32px;
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
            content: "";
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
            content: "";
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

      ${media.mobile.down} {
        .forum-ui-tabs-list {
          width: 100%;
          overflow-x: scroll;
          background: transparent;
          border-radius: 0px;
          box-shadow: none;
        }
        .forum-ui-tabs-list-item {
          margin: 0px 8px;
          &:first-child,
          &:last-child {
            button {
              border-top-left-radius: 0px;
              border-top-right-radius: 0px;
              border-bottom-left-radius: 0px;
              border-bottom-right-radius: 0px;
              &:before,
              &:after {
                border-top-left-radius: 0px;
                border-top-right-radius: 0px;
                border-bottom-left-radius: 0px;
                border-bottom-right-radius: 0px;
              }
            }
          }
          &-button {
            min-height: auto;
            padding: 16px 32px;
            border: 2px solid #f1f1f0 !important;
            border-radius: 45px !important;
            &:after {
              display: none;
            }
            &:before {
              display: none;
            }
            &:focus,
            &:hover,
            &:active,
            &--is-active {
              outline: none;
              border: 2px solid ${colors.primary[400]} !important;
              color: ${colors.primary[400]};
              background: transparent;
            }
          }
        }
      }
    `;
  }}
`;
