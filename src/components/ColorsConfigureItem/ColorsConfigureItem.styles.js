import styled, { css } from "styled-components";
import chroma from "chroma-js";
import checkColorBrightness from "../../helpers/checkColorBrightness";

const { isLight, isReadableLight } = checkColorBrightness;

export const ColorsConfigureItemContainer = styled.div`
  ${props => {
    const { theme = {}, color = "", badColorValue = false } = props;

    const { colors = {}, font = {}, spacing = {} } = theme;
    const hex =
      badColorValue || !chroma.valid(color) ? colors.neutral[300] : color;
    return css`
      position: relative;
      margin-bottom: ${spacing[400]};
      min-height: 140px;
      input:active,
      input:focus {
        outline: none;
      }
      .title-section {
        display: flex;
        align-items: center;
        margin-bottom: ${spacing[100]};
      }
      .color-block {
        &__color-block {
          position: relative;
          cursor: text;
          display: flex;
          align-items: center;
          border: 1px solid ${hex};
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
          background-color: ${badColorValue ? "transparent" : hex};
          position: absolute;
          top: 14px;
          left: 14px;
        }
        &__color-icon {
          height: 14px;
          width: 14px;
          path {
            ${badColorValue && `fill: ${colors.neutral[400]}`};
            ${!badColorValue &&
              `fill: ${
                isLight(hex) ? chroma(hex).darken(3) : chroma(hex).brighten(3)
              }`}
          }
        }
        &__color-input {
          font-size: ${font[500]};
          color: ${colors.black};
          width: 100%;
          height: 28px;
          text-align: center;
          &::placeholder {
            color: ${colors.neutral[300]};
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

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const PaletteBlock = styled.div`
  ${props => {
    const {
      theme = {},
      color = "",
      badColorValue = false,
      isSingleColor = false
    } = props;
    const { font = {}, colors = {} } = theme;
    return css`
      max-height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${isSingleColor ? font[300] : font[200]};
      font-weight: bold;
      height: 100%;
      flex: 1;
      background-color: ${badColorValue ? colors.neutral[300] : color};
      color: ${isReadableLight(color) ? colors.white : colors.black};
    `;
  }}
`;
