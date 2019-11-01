/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CounterContainer } from './Counter.styles';
import Minus from './Icons/MinusIcon';
import Plus from './Icons/PlusIcon';

const Counter = ({
  disabled,
  form,
  name,
  readOnly,
  required,
  pattern,
  value,
  max,
  min,
  multiplier,
  className,
  handleOnChange,
  handleOnFocus,
  handleOnBlur,
}) => {
  const CounterInputRef = useRef(null);
  const [count, updateCount] = useState(value);

  const handleOnInputChange = e => {
    const val = e.target.value;
    if (/^[0-9]+$/g.test(val)) {
      handleOnChange(e);
      updateCount(parseFloat(parseFloat(val).toFixed(2)));
    }
  };

  useEffect(() => {
    handleOnChange({ target: CounterInputRef.current });
  }, [count]);

  const handleOnMinusClick = () => {
    const val = parseFloat(parseFloat(count).toFixed(2));
    if (typeof min !== 'number' || val > min) {
      updateCount(val - multiplier);
    }
  };

  const handleOnPlusClick = () => {
    const val = parseFloat(parseFloat(count).toFixed(2));
    if (typeof max !== 'number' || val < max) {
      updateCount(val + multiplier);
    }
  };

  /* class variables */
  const classNames = {
    button: 'forum-ui-counter-button',
    label: 'forum-ui-counter-input-label',
    input: 'forum-ui-counter-input',
  };

  if (disabled) classNames.label += ` ${classNames.label}--is-disabled`;

  return (
    <CounterContainer className={className}>
      <button
        type="button"
        className={`${classNames.button} ${classNames.button}__left`}
        disabled={disabled}
        onClick={handleOnMinusClick}
      >
        <Minus />
      </button>
      <label className={classNames.label}>
        <input
          ref={CounterInputRef}
          autoComplete="off"
          disabled={disabled}
          form={form}
          name={name}
          readOnly={readOnly}
          required={required}
          pattern={pattern}
          value={count}
          type="text"
          className={classNames.input}
          onChange={handleOnInputChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
      </label>
      <button
        type="button"
        className={`${classNames.button} ${classNames.button}__right`}
        disabled={disabled}
        onClick={handleOnPlusClick}
      >
        <Plus />
      </button>
    </CounterContainer>
  );
};

Counter.defaultProps = {
  disabled: false,
  form: null,
  name: 'select',
  readOnly: false,
  required: false,
  pattern: '',
  value: 0,
  max: 99,
  min: 0,
  multiplier: 1,
  className: '',
  handleOnChange: () => {},
  handleOnFocus: () => {},
  handleOnBlur: () => {},
};

Counter.propTypes = {
  disabled: PropTypes.bool,
  form: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  multiplier: PropTypes.number,
  className: PropTypes.string,
  handleOnChange: PropTypes.func,
  handleOnFocus: PropTypes.func,
  handleOnBlur: PropTypes.func,
};

export default Counter;
