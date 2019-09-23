import styled, { css } from 'styled-components';
import checkColorBrightness from '../../helpers/checkColorBrightness';

export const ConfigureColorBlockContainer = styled.div`
  ${props => {
    const {
      theme = {},
      colorValue = '',
      colorPalette = {},
      inProgress = false,
      isFlatColor = false,
    } = props;

    const { colors = {}, font = {}, spacing = {} } = theme;
    const color = inProgress ? colors.neutral[200] : colorValue;
    return css`
      margin-bottom: ${spacing[400]};
      input:active,
      input:focus {
        outline: none;
      }
      .color-block {
        &__title-block {
          width: fit-content;
          display: flex;
          align-items: baseline;
          margin-bottom: ${spacing[100]};
          transition: all 200ms ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0);
          &:hover,
          &:focus-within {
            border-bottom: 1px solid ${color};
            cursor: 'text';
          }
        }
        &__title-icon {
          padding-left: 4px;
          height: 8px;
          width: 8px;
        }
        &__color-block {
          cursor: text;
          display: flex;
          align-items: center;
          border: 1px solid ${color};
          padding: 16px;
          border-radius: 5px;
          margin-bottom: ${spacing[200]};
          transition: all 200ms ease;
          &:hover {
            border: 1px solid ${color};
            box-shadow: ${color} 0px 0px 2px;
          }
          &:focus-within {
            border: 1px solid ${color};
            box-shadow: ${color} 0px 0px 6px;
          }
        }
        &__color-icon-container {
          height: 28px;
          width: 28px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${inProgress ? 'transparent' : color};
        }
        &__color-icon {
          height: 14px;
          width: 14px;
          path {
            ${(inProgress || isFlatColor) && `fill: ${colors.neutral[400]}`};
            ${!inProgress &&
              !isFlatColor &&
              colorPalette &&
              `
              fill: ${
                checkColorBrightness(color) === 'light' ? colorPalette[800] : colorPalette[100]
              };
            `}
          }
        }
        &__color-input {
          font-size: ${font[500].size};
          max-width: 100px;
          margin-left: 25%;
          margin-bottom: -5px;
          color: ${colors.black};
          &::placeholder {
            color: ${colors.neutral[400]};
          }
        }
        &__palette-block {
          display: flex;
          align-items: center;S;
          height: 40px;
        }
      }
    `;
  }}
`;

export const PaletteBlock = styled.div`
  ${props => {
    const { theme = {}, color = '', inProgress = false } = props;
    const { font = {}, colors = {} } = theme;
    return css`
      max-height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${font[200].size};
      height: 100%;
      flex: 1;
      background-color: ${inProgress ? colors.neutral[100] : color};
      color: ${checkColorBrightness(color) === 'light' ? colors.black : colors.white};
    `;
  }}
`;
