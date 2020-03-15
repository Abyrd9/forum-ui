import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ModalStyled } from './Modal.styles';
import usePortal from '../../../hooks/usePortal';

const Modal = ({ children }) => {
  const target = usePortal('modal-root');

  const modal = (
    <ModalStyled>
      <div className="modal-content">{children}</div>
    </ModalStyled>
  );

  return ReactDOM.createPortal(modal, target);
};

Modal.defaultProps = {
  children: 'Modal',
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default Modal;
