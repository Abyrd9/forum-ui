import styled from 'styled-components';

export const CodeBlockStyled = styled.div`
  position: relative;
  span {
    font-family: inherit;
  }
  .icon-container {
    position: absolute;
    right: 12px;
    top: 12px;
  }
  .icon {
    transition: all 150ms ease-in-out;
    cursor: pointer;
    color: rgb(156, 220, 254);
    height: 26px;
    width: auto;
    &:hover {
      color: rgb(200, 235, 255);
    }
  }
  .copy-portal {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;
