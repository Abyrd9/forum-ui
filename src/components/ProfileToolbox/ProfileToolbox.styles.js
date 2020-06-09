import styled, { css } from "styled-components";

export const ProfileToolboxStyled = styled.div`
  ${({ theme = {} }) => {
    const { media = {} } = theme;
    return css`
      .toolbox-list {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        &__item {
          margin-right: 14px;
          &:last-child {
            margin-right: 0;
          }
          ${media.mobile.down} {
            margin-top: 4px;
            margin-bottom: 4px;
          }
        }
      }
    `;
  }}
`;
