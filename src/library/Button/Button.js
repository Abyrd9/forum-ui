import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './Button.styles';
import Loading from './Loading';

const Button = ({ children, ...props }) => {
  const disabled = props.disabled || props.loading;
  return (
    <ButtonContainer disabled={disabled} {...props}>
      {children}
      {props.loading && <Loading />}
    </ButtonContainer>
  );
};

Button.defaultProps = {
  children: 'Button',
  loading: false,
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
