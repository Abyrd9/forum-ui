import styled, { css } from 'styled-components';

export const TitleInputContainer = styled.label`
  ${({ color = '' }) => {
    return css`
      width: fit-content;
      display: flex;
      align-items: baseline;
      transition: all 200ms ease;
      border-bottom: 1px solid rgba(0, 0, 0, 0);
      &:hover,
      &:focus-within {
        border-bottom: 1px solid ${color};
        cursor: 'text';
      }
      .edit-icon {
        padding-left: 4px;
        height: 8px;
        width: 8px;
      }
    `;
  }}
`;
