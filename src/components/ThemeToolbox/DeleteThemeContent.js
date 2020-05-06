import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../library/components/Button";

const DeleteThemeContent = ({ activeThemeName, toggleModalVisible, handleOnClick }) => {
  return (
    <>
      <h4 className="modal-title">
        Are you sure you want to delete <b>{activeThemeName}</b>?
      </h4>
      <div className="button-container">
        <Button
          large
          error
          colorWhite
          onClick={() => {
            handleOnClick();
            toggleModalVisible(false);
          }}
        >
          Delete
        </Button>
        <Button
          large
          error
          outline
          onClick={() => toggleModalVisible(false)}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

DeleteThemeContent.propTypes = {
  activeThemeName: PropTypes.string,
  toggleModalVisible: PropTypes.bool,
  handleOnClick: PropTypes.func,
};

export default DeleteThemeContent;