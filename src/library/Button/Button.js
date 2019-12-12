import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './Button.styles';

const Button = ({ children, ...props }) => {
  const { type } = props;
  return (
    <ButtonContainer type={type} {...props}>
      {children}
    </ButtonContainer>
  );
};

Button.defaultProps = {
  children: 'Button',
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  type: PropTypes.string,
};

export default Button;
