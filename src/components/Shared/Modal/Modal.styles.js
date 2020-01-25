import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.25);
  .modal-content {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background-color: #FFFFFF;
    padding: 25px;
  }
`;