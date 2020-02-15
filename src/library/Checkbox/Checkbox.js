import React from "react";
import PropTypes from "prop-types";
import { CheckboxStyled } from "./Checkbox.styles";
import Check from "./Check";

const Checkbox = ({
  disabled,
  form,
  name,
  readOnly,
  required,
  value,
  className,
  handleOnChange,
  handleOnFocus,
  handleOnBlur, ...props }) => {
  return <CheckboxStyled {...props}>
    <input type="checkbox" className="forum-ui-checkbox-input" />
    <span className="forum-ui-checkbox-checkbox">
      <Check />
    </span>
  </CheckboxStyled>;
};

Checkbox.defaultProps = {
  children: "Checkbox"
};

Checkbox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

export default Checkbox;
    