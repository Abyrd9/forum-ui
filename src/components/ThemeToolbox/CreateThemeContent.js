import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../library/components/Button";

const CreateThemeContent = ({ toggleModalVisible, handleOnClick }) => {
  return (
    <>
      <h4 className="modal-title">
        Do you want to create a new theme?
      </h4>
      <div className="button-container">
        <Button
          large
          success
          colorWhite
          onClick={() => {
            handleOnClick();
            toggleModalVisible(false);
          }}
        >
          Create
        </Button>
        <Button
          large
          success
          outline
          onClick={() => toggleModalVisible(false)}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

CreateThemeContent.propTypes = {
  toggleModalVisible: PropTypes.bool,
  handleOnClick: PropTypes.func,
};

export default CreateThemeContent;