import styled, { css } from 'styled-components';

export const FooterStyled = styled.div`
  ${({ theme = {} }) => {
    const { colors = {}, spacing = {} } = theme;
    console.log(colors);
    return css`
      margin-top: calc(${spacing[800]} * 2);
      height: 100px;
      background-color: ${colors.neutral[800]};
      display: flex;
      align-items: center;
      justify-content: center;
      .all-rights-reserved {
        text-transform: uppercase;
      }
      .divider {
        width: 1px;
        height: 16px;
        background-color: ${colors.white};
        margin: ${spacing[500]};
      }
      p {
        color: ${colors.white};
      }
    `;
  }}
`;
