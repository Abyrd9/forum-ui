import React from "react";
import PropTypes from "prop-types";
import { AddButtonContainer } from "./AddButton.styles";
import PlusIcon from "../../../Utilities/Icons/PlusIcon";

const AddButton = ({ handleOnClick, disabled }) => {
  return (
    <AddButtonContainer onClick={handleOnClick} disabled={disabled}>
      <PlusIcon className="add-icon" />
    </AddButtonContainer>
  );
};

AddButton.defaultProps = {
  handleOnClick: () => {},
  disabled: false
};

AddButton.propTypes = {
  handleOnClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default AddButton;
