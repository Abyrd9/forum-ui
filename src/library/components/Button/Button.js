import React from "react";
import PropTypes from "prop-types";
import { ButtonContainer } from "./Button.styles";
import Loading from "./Loading";

const Button = ({ children, disabled, loading, ...props }) => {
  return (
    <ButtonContainer
      disabled={disabled || loading}
      loading={loading}
      {...props}
    >
      {children}
      {loading && <Loading />}
    </ButtonContainer>
  );
};

Button.defaultProps = {
  children: "Button",
  disabled: false,
  loading: false
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};

export default Button;
