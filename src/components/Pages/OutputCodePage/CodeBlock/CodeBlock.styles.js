import styled from 'styled-components';

export const CodeBlockStyled = styled.div`
  position: relative;
  span {
    font-family: inherit;
  }
  .icon {
    transition: all 150ms ease-in-out;
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 12px;
    color: rgb(156, 220, 254);
    height: 26px;
    width: auto;
    &:hover {
      transform: translateY(-1.5px);
    }
  }
  .copy-portal {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;
