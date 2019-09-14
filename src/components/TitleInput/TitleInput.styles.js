import styled, { css } from 'styled-components';

export const TitleInputContainer = styled.div`
  ${props => {
    const { theme = {}, width = 'null' } = props;
    const { fontSize = {}, colors = {} } = theme;
    return css`
      position: relative;
      input,
      div {
        text-transform: capitalize;
        padding: 0;
        margin: 0;
      }
      .title-input {
        &__input {
          color: ${colors.black};
          font-size: ${fontSize[400]};
          width: ${width}px;
          &:disabled {
            background-color: transparent;
            color: ${colors.black};
          }
        }
        &__hidden {
          visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    `;
  }}
`;
