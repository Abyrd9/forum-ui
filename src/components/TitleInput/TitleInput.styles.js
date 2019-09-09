import styled, { css } from 'styled-components';

export const TitleInputContainer = styled.div`
  ${props => {
    const { theme = {}, width = 'null' } = props;
    const { font = {} } = theme;
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
          font-size: ${font[400]};
          width: ${width}px;
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
