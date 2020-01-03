import React from 'react';
import PropTypes from 'prop-types';
import { TitleInputContainer } from './TitleInput.styles';
import AutoResizeInput from '../../../Utilities/AutoResizeInput';
import EditIcon from '../../../Utilities/Icons/EditIcon';

const TitleInput = ({ value, placeholder, handleOnChange }) => {
  return (
    <TitleInputContainer>
      <AutoResizeInput placeholder={placeholder} value={value} handleOnChange={handleOnChange} />
      <EditIcon className="edit-icon" />
    </TitleInputContainer>
  );
};

TitleInput.defaultProps = {
  value: '',
  placeholder: '',
  handleOnChange: () => {},
};

TitleInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
};

export default TitleInput;
