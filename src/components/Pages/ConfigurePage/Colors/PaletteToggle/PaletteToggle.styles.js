import styled, { css } from "styled-components";
import chroma from "chroma-js";

export const PaletteToggleContainer = styled.label`
  ${({ theme = {}, isFlat = false, color = "", badColorValue = false }) => {
    const { colors = {}, spacing = {} } = theme;
    const colorVal =
      chroma.valid(color) && chroma.contrast(color, "#FFFFFF") < 1.2
        ? chroma(color).darken(0.5)
        : color;
    return css`
      visibility: ${badColorValue ? "hidden" : "visible"};
      cursor: pointer;
      transition: background-color 150ms ease;
      position: relative;
      height: 14px;
      width: 30px;
      border-radius: 20px;
      background-color: ${isFlat ? colors.neutral[300] : colorVal};
      display: flex;
      align-items: center;
      padding: 4px;
      margin-left: auto;
      margin-right: ${spacing[100]};
      &:focus-within {
        &:before {
          opacity: 1;
        }
      }
      &:before {
        transition: all 100ms ease-in-out;
        opacity: 0;
        display: inline-block;
        content: "";
        position: absolute;
        left: -3px;
        top: -3px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        background-color: transparent;
        border: 1px solid ${isFlat ? colors.neutral[500] : colorVal};
        border-radius: 20px;
        box-shadow: 0 0 4px ${isFlat ? colors.neutral[500] : colorVal};
      }
      .palette-toggle-input {
        height: 0;
        width: 0;
        opacity: 0;
      }
      .palette-toggle-icon {
        transition: all 150ms ease;
        transform: ${isFlat ? "translateX(0px)" : "translateX(16px)"};
        height: 14px;
        width: 14px;
        path {
          transition: all 150ms ease;
          fill: ${isFlat ? colors.neutral[500] : colors.white};
        }
      }
    `;
  }}
`;
