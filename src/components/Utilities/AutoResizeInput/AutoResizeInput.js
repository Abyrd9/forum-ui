import React, { useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { AutoResizeInputContainer } from './AutoResizeInput.styles';

const AutoResizeInput = ({ value, handleOnChange, pattern, ...props }) => {
  const hiddenRef = useRef({});
  const [width, setWidth] = useState();

  useLayoutEffect(() => {
    setWidth(hiddenRef.current.clientWidth + 1.5);
  }, [hiddenRef, value]);

  const onChange = e => {
    if (pattern.test(e.target.value)) handleOnChange(e);
  };

  return (
    <AutoResizeInputContainer width={width} value={value}>
      <input
        data-testid="resize-input"
        className="title-input__input"
        value={value}
        onChange={onChange}
        {...props}
      />
      <div data-testid="resize-container" className="title-input__hidden" ref={hiddenRef}>
        {value}
      </div>
    </AutoResizeInputContainer>
  );
};

AutoResizeInput.defaultProps = {
  value: '',
  handleOnChange: () => {},
  pattern: /(.*?)/g,
};

AutoResizeInput.propTypes = {
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  pattern: PropTypes.instanceOf(RegExp),
};

export default AutoResizeInput;
