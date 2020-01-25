import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ModalStyled } from './Modal.styles';
import usePortal from '../../../hooks/usePortal';

const Modal = ({ children, id }) => {
  const target = usePortal(id);
  const modal = (
    <ModalStyled>
      <div className="modal-content">{children}</div>
    </ModalStyled>
  );

  return ReactDOM.createPortal(modal, target);
};

Modal.defaultProps = {
  children: 'Modal',
  id: 'modal'
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  id: PropTypes.string,
};

export default Modal;
