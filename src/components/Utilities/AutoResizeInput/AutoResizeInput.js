import React, { useRef, useState, useLayoutEffect } from 'react';
import { AutoResizeInputContainer } from './AutoResizeInput.styles';

const AutoResizeInput = props => {
  const { value = '', handleOnChange = () => {}, pattern = /(.*?)/g } = props;
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
      <input className="title-input__input" {...props} value={value} onChange={onChange} />
      <div className="title-input__hidden" ref={hiddenRef}>
        {value}
      </div>
    </AutoResizeInputContainer>
  );
};

export default AutoResizeInput;
