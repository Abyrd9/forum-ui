import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './Button.styles';
import Loading from './Loading';

const Button = ({ children, ...props }) => {
  const { loading } = props;
  return (
    <ButtonContainer disabled={props.disabled || loading} loading={loading} {...props}>
      {children}
      {loading && <Loading />}
    </ButtonContainer>
  );
};

Button.defaultProps = {
  children: 'Button',
  loading: false,
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  loading: PropTypes.bool,
};

export default Button;
