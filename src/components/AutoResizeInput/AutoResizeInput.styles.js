import styled, { css } from 'styled-components';

export const AutoResizeInputContainer = styled.div`
  ${props => {
    const { theme = {}, width = 'null', value } = props;
    const { font = {}, colors = {} } = theme;
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
          font-size: ${font[400].size};
          width: ${width}px;
          max-width: 160px;
          min-width: ${!value || value === '' ? '80px' : '0px'}
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
