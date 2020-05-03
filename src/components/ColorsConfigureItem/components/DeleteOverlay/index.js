import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { DeleteOverlayContainer } from "./DeleteOverlay.styles";
import Button from "../../../../library/components/Button";
import matchParentNode from "../../../../helpers/matchParentNode";

const DeleteOverlay = ({ text, handleOnClose, handleOnDelete }) => {
  const DeleteOverlayRef = useRef(null);

  const handleClick = remove => {
    handleOnClose();
    if (remove) handleOnDelete();
  };

  const handleDocumentClick = ({ target }) => {
    const { current = {} } = DeleteOverlayRef;
    const isWithinContainer = matchParentNode(current, target);
    if (!isWithinContainer) {
      handleOnClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <DeleteOverlayContainer ref={DeleteOverlayRef}>
      <p className="delete-text">{text}</p>
      <div className="button-container">
        <Button
          small
          error
          className="button-container__delete"
          onClick={() => handleClick(true)}
        >
          Delete
        </Button>
        <Button
          outline
          small
          error
          className="button-container__cancel"
          onClick={() => handleClick(false)}
        >
          Cancel
        </Button>
      </div>
    </DeleteOverlayContainer>
  );
};

DeleteOverlay.defaultProps = {
  text: "",
  handleOnClose: () => {},
  handleOnDelete: () => {}
};

DeleteOverlay.propTypes = {
  text: PropTypes.string,
  handleOnClose: PropTypes.func,
  handleOnDelete: PropTypes.func
};

export default DeleteOverlay;
