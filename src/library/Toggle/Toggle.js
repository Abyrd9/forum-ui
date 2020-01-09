/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToggleContainer } from './Toggle.styles';
import TimesIcon from '../../components/Utilities/Icons/TimesIcon';
import CheckIcon from '../../components/Utilities/Icons/CheckIcon';
import generateUniqueKey from '../../helpers/generateUniqueKey';

const Toggle = React.forwardRef((props, ref) => {
  const {
    disabled,
    form,
    list,
    name,
    readonly,
    required,
    value,
    checked,
    handleOnChange,
    handleOnBlur,
    handleOnFocus,
    className,
  } = props;
  const [toggle, updateToggle] = useState(checked);

  const handleChange = e => {
    updateToggle(e.target.checked);
    if (handleOnChange) handleOnChange(e);
  };

  let containerClass = 'forum-ui-toggle';
  if (className) containerClass += ` ${className}`;
  const customId = `forum-ui-toggle-${generateUniqueKey()}`;
  return (
    <ToggleContainer className={containerClass} {...props}>
      <input
        id={customId}
        className="forum-ui-toggle-input"
        type="checkbox"
        disabled={disabled}
        form={form}
        list={list}
        name={name}
        readOnly={readonly}
        required={required}
        value={value}
        checked={toggle}
        onChange={handleChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        ref={ref}
      />
      <label htmlFor={customId} className="forum-ui-toggle-label">
        <span className="forum-ui-toggle-span">
          <TimesIcon className="forum-ui-toggle-icon times-icon" />
          <CheckIcon className="forum-ui-toggle-icon check-icon" />
        </span>
      </label>
    </ToggleContainer>
  );
});

Toggle.defaultProps = {
  disabled: false,
  form: '',
  list: '',
  name: '',
  readonly: false,
  required: false,
  value: '',
  checked: false,
  handleOnChange: () => {},
  handleOnBlur: () => {},
  handleOnFocus: () => {},
  className: '',
};

Toggle.propTypes = {
  disabled: PropTypes.bool,
  form: PropTypes.string,
  list: PropTypes.string,
  name: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.bool,
  handleOnChange: PropTypes.func,
  handleOnBlur: PropTypes.func,
  handleOnFocus: PropTypes.func,
  className: PropTypes.string,
};

export default Toggle;
