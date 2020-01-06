import React from 'react';
import PropTypes from 'prop-types';
import { InputContainerContainer } from './InputContainer.styles';

const InputContainer = ({ title, children }) => {
  return (
    <InputContainerContainer>
      {title && <p className="configuration-block-title">{title}</p>}
      {children}
    </InputContainerContainer>
  );
};

InputContainer.defaultProps = {
  title: '',
  children: 'InputContainer',
};

InputContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default InputContainer;
