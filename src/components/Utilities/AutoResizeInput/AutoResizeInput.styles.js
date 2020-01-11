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
          font-size: ${font[400]};
          width: ${width + 2}px;
          max-width: 180px;
          min-width: ${!value || value === '' ? '80px' : '0px'};
          text-overflow: ellipsis;
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
