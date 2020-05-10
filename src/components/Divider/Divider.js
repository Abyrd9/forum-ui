import styled, { css } from "styled-components";

const Divider = styled.div`
  ${({
    theme = {},
    spacing = 400,
    show = false,
    shorten = false,
    upperSpacing
  }) => {
    return css`
      opacity: 0;
      height: 0;
      width: ${shorten ? "50%" : "100%"};
      margin-bottom: ${theme.spacing[spacing]};
      ${show &&
        `opacity: 1;
         height: 1px;
         background-color: ${theme.colors.neutral[300]};
         margin-top: ${theme.spacing[upperSpacing || 200]};
      `};
    `;
  }}
`;

export default Divider;
