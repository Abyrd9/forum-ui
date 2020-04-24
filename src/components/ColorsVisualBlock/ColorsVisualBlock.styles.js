import styled, { css } from "styled-components";
import checkColorBrightness from "../../helpers/checkColorBrightness";

const { isReadableLight } = checkColorBrightness;
export const ColorsVisualBlockStyled = styled.div`
  ${({ theme = {} }) => {
    const { spacing = {}, colors = {} } = theme;
    return css`
      .color-block-title {
        text-transform: capitalize;
        margin-bottom: ${spacing[100]};
        color: ${colors.neutral[400]};
      }
      .color-block-list {
        margin-bottom: ${spacing[400]};
        display: flex;
      }
    `;
  }}
`;

export const ColorItem = styled.div`
  ${({ theme = {}, color = "", isFlat = false }) => {
    const { media = {} } = theme;
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      height: 70px;
      width: 60px;
      background-color: ${color};
      flex: ${isFlat ? 1 : "60px"};
      color: ${isReadableLight(color) ? "#ffffff" : "#000000"}
        ${media.mobile.down} {
        height: 50px;
        font-size: 10px;
      }
    `;
  }}
`;
