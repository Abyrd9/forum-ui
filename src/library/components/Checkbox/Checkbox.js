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
  checked,
  value,
  className,
  handleOnChange,
  handleOnFocus,
  handleOnBlur,
  ...props
}) => {
  return (
    <CheckboxStyled className={className} {...props}>
      <input
        type="checkbox"
        disabled={disabled}
        form={form}
        name={name}
        readOnly={readOnly}
        required={required}
        checked={checked}
        value={value}
        className="forum-ui-checkbox-input"
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <span className="forum-ui-checkbox-checkbox">
        <Check />
      </span>
    </CheckboxStyled>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  form: null,
  name: "checkbox",
  readOnly: false,
  required: false,
  checked: false,
  value: "",
  className: "",
  handleOnChange: () => {},
  handleOnFocus: () => {},
  handleOnBlur: () => {}
};

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  form: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  value: PropTypes.arrayOf([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.object
  ]),
  className: PropTypes.string,
  handleOnChange: PropTypes.func,
  handleOnFocus: PropTypes.func,
  handleOnBlur: PropTypes.func
};

export default Checkbox;
