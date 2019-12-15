import React from 'react';
import PropTypes from 'prop-types';
import { DeleteOverlayContainer } from './DeleteOverlay.styles';
import Button from '../../../../../library/Button/Button';

const DeleteOverlay = ({ isVisible, setIsVisible, handleOnDelete }) => {
  const handleClick = remove => {
    setIsVisible(false);
    if (remove) handleOnDelete();
  };

  return (
    <DeleteOverlayContainer isVisible={isVisible}>
      <p className="delete-text">Are you sure you want to delete this color?</p>
      <div className="button-container">
        <Button small className="button-container__delete" onClick={() => handleClick(true)}>
          Delete
        </Button>
        <Button small className="button-container__cancel" onClick={() => handleClick(false)}>
          Cancel
        </Button>
      </div>
    </DeleteOverlayContainer>
  );
};

DeleteOverlay.propTypes = {
  isVisible: PropTypes.bool,
  handleOnDelete: PropTypes.func,
};

export default DeleteOverlay;
