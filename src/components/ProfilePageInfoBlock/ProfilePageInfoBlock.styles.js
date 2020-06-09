import styled, { css } from "styled-components";

export const ProfilePageInfoBlockStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, spacing = {} } = theme;
    return css`
      margin-bottom: ${spacing[400]};
      .info-block-title {
        font-weight: bolder;
        font-size: 14px;
        color: ${colors.neutral[600]};
        text-transform: uppercase;
        margin-bottom: 4px;
      }
      .info-block-content {
        font-family: Josefin Sans;
        font-weight: bold;
        font-size: 20px;
        color: ${colors.neutral[800]};
      }
    `;
  }}
`;
