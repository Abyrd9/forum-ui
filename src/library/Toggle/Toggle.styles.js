import styled, { css } from 'styled-components';
import buildStyleMap from '../../helpers/buildStyleMap';

export const ToggleContainer = styled.span`
  ${props => {
    const { theme = {}, small, large } = props;
    const { colors = {} } = theme;

    let width = 42;
    let height = 16;
    let dotSize = 26;

    if (small) {
      width *= 0.75;
      height *= 0.75;
      dotSize *= 0.75;
    }

    if (large) {
      width *= 1.15;
      height *= 1.15;
      dotSize *= 1.15;
    }

    const checkedPos = width - dotSize;
    return css`
      .forum-ui-toggle-input {
        opacity: 0;
        height: 0;
        width: 0;
        &:focus + .forum-ui-toggle-label:before {
          opacity: 1;
        }
        &:checked + .forum-ui-toggle-label {
          background-color: ${colors.primary[200]};
          .forum-ui-toggle-span {
            background-color: ${colors.primary[400]};
            transform: translateX(${checkedPos}px);
          }
          .forum-ui-toggle-icon.times-icon {
            opacity: 0;
          }
          .forum-ui-toggle-icon.check-icon {
            opacity: 1;
          }
        }

        &:disabled + .forum-ui-toggle-label {
          background-color: ${colors.neutral[100]};
          .forum-ui-toggle-span {
            background-color: ${colors.neutral[200]};
          }
          /* Keep dot from transitioning on disabled hover */
          &:hover {
            .forum-ui-toggle-span {
              transform: translateX(0);
            }
          }
        }
      }

      .forum-ui-toggle-label {
        transition: all 200ms ease-in-out;
        background-color: ${colors.neutral[200]};
        display: inline-block;
        cursor: pointer;
        width: ${buildStyleMap({
          small: `${width}px`,
          large: `${width}px`,
          default: `${width}px`,
        })};
        height: ${buildStyleMap({
          small: `${height}px`,
          large: `${height}px`,
          default: `${height}px`,
        })};
        border-radius: 20px;
        position: relative;
        &:hover {
          background-color: ${colors.primary[100]};
          .forum-ui-toggle-span {
            background-color: ${colors.primary[200]};
            transform: translateX(5px);
          }
        }
        &:before {
          transition: all 200ms ease-in-out;
          opacity: 0;
          display: inline-block;
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          width: ${buildStyleMap({
            small: `${width + 2}px`,
            large: `${width + 2}px`,
            default: `${width + 2}px`,
          })};
          height: ${buildStyleMap({
            small: `${height + 2}px`,
            large: `${height + 2}px`,
            default: `${height + 2}px`,
          })};
          border-radius: 20px;
          background-color: transparent;
          box-shadow: 0 0 3px ${colors.primary[400]};
        }
      }

      .forum-ui-toggle-span {
        transition: all 200ms ease-in-out;
        background-color: ${colors.neutral[400]};
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: ${buildStyleMap({
          small: `-${(dotSize - height) / 2}px`,
          large: `-${(dotSize - height) / 2}px`,
          default: `-${(dotSize - height) / 2}px`,
        })};
        height: ${buildStyleMap({
          small: `${dotSize}px`,
          large: `${dotSize}px`,
          default: `${dotSize}px`,
        })};
        width: ${buildStyleMap({
          small: `${dotSize}px`,
          large: `${dotSize}px`,
          default: `${dotSize}px`,
        })};
        border-radius: 100%;
      }

      .forum-ui-toggle-icon {
        transition: all 200ms ease-in-out;
        position: absolute;
        path {
          fill: ${colors.neutral[100]};
        }
      }
      .forum-ui-toggle-icon.times-icon {
        opacity: 1;
        height: ${buildStyleMap({
          small: `${18 * 0.75}px`,
          large: `${18 * 1.15}px`,
          default: `${18}px`,
        })};
      }
      .forum-ui-toggle-icon.check-icon {
        opacity: 0;
        height: ${buildStyleMap({
          small: `${16 * 0.75}px`,
          large: `${16 * 1.15}px`,
          default: `${16}px`,
        })};
      }
    `;
  }}
`;
