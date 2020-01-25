/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './Input.styles';

const Input = ({
  autoComplete,
  disabled,
  form,
  name,
  readOnly,
  required,
  placeholder,
  pattern,
  value,
  type,
  className,
  infoShow,
  infoMssg,
  handleOnChange,
  handleOnFocus,
  handleOnBlur,
  Icon,
  ...props
}) => {
  /* class variables */
  const classNames = {
    label: 'forum-ui-input-label',
    input: 'forum-ui-input',
    icon: 'forum-ui-input-icon',
    placeholder: 'forum-ui-input-placeholder',
    info: 'forum-ui-input-info',
  };

  // building class names based on props
  if (disabled) {
    Object.entries(classNames).forEach(([key, classNameValue]) => {
      classNames[key] += ` ${classNameValue}--is-disabled`;
    });
  }

  if (!disabled && value.length > 0) {
    classNames.placeholder += ` ${classNames.placeholder}--is-active`;
  }

  if (readOnly) {
    Object.entries(classNames).forEach(([key, classNameValue]) => {
      classNames[key] += ` ${classNameValue}--read-only`;
    });
  }

  return (
    <>
      <InputStyled
        className={className}
        info={disabled ? {} : { show: infoShow, color: infoMssg.color }}
        {...props}
      >
        <label className={classNames.label}>
          <input
            autoComplete={autoComplete}
            disabled={disabled}
            form={form}
            name={name}
            readOnly={readOnly}
            required={required}
            pattern={pattern}
            value={value}
            type={type}
            className={classNames.input}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          {Icon && <span className={classNames.icon}>{Icon}</span>}
          {placeholder && <span className={classNames.placeholder}>{placeholder}</span>}
        </label>
      </InputStyled>
      {!disabled && infoShow && <p className={classNames.info}>{infoMssg.message}</p>}
    </>
  );
};

Input.defaultProps = {
  autoComplete: true,
  disabled: false,
  form: null,
  name: 'select',
  readOnly: false,
  required: false,
  placeholder: '',
  pattern: '',
  value: '',
  type: 'text',
  className: '',
  infoShow: false,
  infoMssg: {
    message: '',
    color: '',
  },
  handleOnChange: () => {},
  handleOnFocus: () => {},
  handleOnBlur: () => {},
  Icon: null,
};

Input.propTypes = {
  autoComplete: PropTypes.bool,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  infoShow: PropTypes.bool,
  infoMssg: PropTypes.shape({
    message: PropTypes.string,
    color: PropTypes.string,
  }),
  handleOnChange: PropTypes.func,
  handleOnFocus: PropTypes.func,
  handleOnBlur: PropTypes.func,
  Icon: PropTypes.node,
};

export default Input;
