import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import captureKeyEvents from "./helpers/captureKeyEvents";
import { ModalStyled } from "./Modal.styles";
import TimesIcon from "./TimesIcon";

const Modal = ({
  visible,
  handleOnClose,
  overlayClick,
  className,
  children,
  ...props
}) => {
  /* Modal keyboard trapping and focus management */
  const ModalRef = useRef(null);

  /* Lifecycle Methods */

  // On mount and unmount, add and remove event listeners
  useEffect(() => {
    document.addEventListener(
      "keydown",
      captureKeyEvents(ModalRef.current, handleOnClose)
    );
    return () => {
      document.removeEventListener(
        "keydown",
        captureKeyEvents(ModalRef.current, handleOnClose)
      );
    };
  }, []);

  useEffect(() => {
    const addRemove = visible ? "add" : "remove";
    document.body.classList[addRemove]("no-scroll");
  }, [visible]);

  // handler for a user clicking outside the modal
  const onOutsideClick = ({ target }) => {
    const enabled = visible && overlayClick;
    const isSameNode = target === ModalRef.current;
    if (enabled && isSameNode) {
      handleOnClose(false);
    }
  };

  return (
    <ModalStyled
      visible={visible}
      ref={ModalRef}
      className={className}
      onClick={onOutsideClick}
      {...props}
    >
      <div className="modal__content">
        <TimesIcon onClick={() => handleOnClose(false)} />
        {children}
      </div>
    </ModalStyled>
  );
};

Modal.defaultProps = {
  visible: false,
  handleOnClose: () => {},
  overlayClick: true,
  closeIcon: true,
  className: "modal",
  children: ""
};

Modal.propTypes = {
  visible: PropTypes.bool,
  handleOnClose: PropTypes.func,
  overlayClick: PropTypes.bool,
  closeIcon: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

export default Modal;
