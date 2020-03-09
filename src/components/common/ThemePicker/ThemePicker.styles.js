import styled, { css } from "styled-components";
import Button from "../../../library/Button";

export const ThemePickerStyled = styled.div`
  ${({ theme = {} }) => {
    return css``;
  }}
`;

export const ExtendedButton = styled(Button)`
  ${({ theme = {} }) => {
    const { colors = {} } = theme;
    return css`
      height: 55px;
      width: 55px;
      color: ${colors.primary[400]};
      .icon {
        font-size: 24px;
      }
    `;
  }}
`;
