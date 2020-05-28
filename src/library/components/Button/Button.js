import React from "react";
import PropTypes from "prop-types";
import { ButtonContainer } from "./Button.styles";
import Loading from "./Loading";

const Button = ({ children, disabled, loading, icon, ...props }) => {
  return (
    <ButtonContainer
      disabled={disabled || loading}
      loading={loading}
      {...props}
    >
      {children}
      {loading && <Loading />}
      {!loading && icon && <span className="button-icon">{icon}</span>}
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
  loading: PropTypes.bool,
  icon: PropTypes.node
};

export default Button;
