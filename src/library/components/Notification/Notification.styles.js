import styled, { css, keyframes } from "styled-components";
import chroma from "chroma-js";
import DEFAULT_THEME from "../../constants";
import { checkColorObj } from "../../helpers/checkThemeObjects";
import styleMap from "../../helpers/styleMap";
import buildColorPalette from "../../helpers/buildColorPalette";

const start = keyframes`
  from {
    transform: translateY(24px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const end = keyframes`
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(24px);
    opacity: 0;
  }
`;

export const NotificationStyled = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { colors = {} } = theme;

    const { error } = DEFAULT_THEME.colors;
    let color = checkColorObj(colors)
      ? styleMap({
          ...colors,
          default: error
        })(props)[400]
      : error[400];
    color = buildColorPalette(color);

    const textcolor =
      chroma.valid(color[400]) && chroma.contrast("#ffffff", color[400]) > 4.5
        ? "#ffffff"
        : "#000000";

    return css`
      animation: ${({ show }) => (show ? start : end)} 1s
        cubic-bezier(0.1, 0.65, 0.45, 1) forwards;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.2);
      position: fixed;
      bottom: ${({ bottom }) => bottom || "24px"};
      right: 24px;
      padding: 24px 42px 24px 24px;
      max-width: 600px;
      border-radius: 4px;
      background-color: ${color[400]};
      color: ${textcolor};
      p {
        color: ${textcolor};
      }
      .notification-close-icon {
        cursor: pointer;
        position: absolute;
        top: 8px;
        right: 8px;
        height: 16px;
        width: 16px;
        path {
          fill: ${textcolor};
        }
      }
    `;
  }}
`;
