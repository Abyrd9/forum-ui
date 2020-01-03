import React from 'react';
import PropTypes from 'prop-types';
import { DeleteButtonContainer } from './DeleteButton.styles';
import TimesIcon from '../../../Utilities/Icons/TimesIcon';

const DeleteButton = ({ handleOnClick }) => {
  return (
    <DeleteButtonContainer onClick={handleOnClick}>
      <TimesIcon className="delete-icon" />
    </DeleteButtonContainer>
  );
};

DeleteButton.defaultProps = {
  handleOnClick: () => {},
};

DeleteButton.propTypes = {
  handleOnClick: PropTypes.func,
};

export default DeleteButton;
