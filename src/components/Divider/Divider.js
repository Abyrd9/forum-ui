import styled, { css } from "styled-components";

const Divider = styled.div`
  ${({ theme = {}, spacing = 400 }) => {
    return css`
      opacity: 0;
      height: 0;
      width: 100%;
      margin-bottom: ${theme.spacing[spacing]};
    `;
  }}
`;

export default Divider;
