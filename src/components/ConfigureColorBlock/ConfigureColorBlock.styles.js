import styled, { css } from 'styled-components';
import lightOrDark from '../../helpers/lightOrDark';

export const ConfigureColorBlockContainer = styled.div`
  ${props => {
    const { theme = {}, hex = '', palette = {}, flat = false } = props;
    const { colors = {}, font = {}, spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[400]};
      input:active,
      input:focus {
        outline: none;
      }
      .configure-color-block {
        &__title-block {
          width: fit-content;
          display: flex;
          align-items: baseline;
          margin-bottom: ${spacing[100]};
          transition: all 200ms ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0);
          &:hover,
          &:focus-within {
            border-bottom: 1px solid ${hex};
            cursor: text;
          }
        }
        &__title-input {
          text-transform: capitalize;
          font-size: ${font[400]};
          color: ${colors.black};
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
          border: 1px solid ${flat ? hex : colors.black};
          padding: 16px;
          border-radius: 5px;
          margin-bottom: ${spacing[200]};
          transition: all 200ms ease;
          &:hover {
            border: 1px solid ${hex};
            box-shadow: ${hex} 0px 0px 2px;
          }
          &:focus-within {
            border: 1px solid ${hex};
            box-shadow: ${hex} 0px 0px 6px;
          }
        }
        &__color-icon-container {
          height: 28px;
          width: 28px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${hex};
        }
        &__color-icon {
          height: 14px;
          width: 14px;
          path {
            fill: ${lightOrDark(hex) === 'light' ? palette[800] : palette[100]};
          }
        }
        &__color-input {
          font-size: ${font[500]};
          max-width: 100px;
          margin-left: 25%;
          margin-bottom: -5px;
        }
        &__palette-block {
          display: flex;
          align-items: center;
          flex-direction: row-reverse;
          height: 40px;
        }
      }
    `;
  }}
`;

export const PaletteBlock = styled.div`
  ${props => {
    const { theme = {}, color = '' } = props;
    const { font, colors } = theme;
    return css`
      max-height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${font[200]};
      height: 100%;
      flex: 1;
      background-color: ${color};
      color: ${lightOrDark(color) === 'light' ? colors.black : colors.white};
    `;
  }}
`;
