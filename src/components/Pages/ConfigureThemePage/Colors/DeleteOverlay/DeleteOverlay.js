import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { DeleteOverlayContainer } from './DeleteOverlay.styles';
import Button from '../../../../../library/Button';
import matchParentNode from '../../../../../helpers/matchParentNode';

const DeleteOverlay = ({ handleOnClose, handleOnDelete }) => {
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
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  return (
    <DeleteOverlayContainer ref={DeleteOverlayRef}>
      <p className="delete-text">Are you sure you want to delete this color?</p>
      <div className="button-container">
        <Button small error className="button-container__delete" onClick={() => handleClick(true)}>
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
  handleOnClose: () => {},
  handleOnDelete: () => {},
};

DeleteOverlay.propTypes = {
  handleOnClose: PropTypes.func,
  handleOnDelete: PropTypes.func,
};

export default DeleteOverlay;
