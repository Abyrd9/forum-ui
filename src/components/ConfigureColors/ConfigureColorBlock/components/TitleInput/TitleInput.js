import React from 'react';
import PropTypes from 'prop-types';
import { TitleInputContainer } from './TitleInput.styles';
import AutoResizeInput from '../../../../AutoResizeInput';
import EditIcon from '../../../../Icons/EditIcon';

const TitleInput = ({ value, handleOnChange }) => {
  return (
    <TitleInputContainer>
      <AutoResizeInput placeholder="ColorTitle" value={value} handleOnChange={handleOnChange} />
      <EditIcon className="edit-icon" />
    </TitleInputContainer>
  );
};

TitleInput.defaultProps = {
  value: '',
  handleOnChange: () => {},
};

TitleInput.propTypes = {
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
};

export default TitleInput;
