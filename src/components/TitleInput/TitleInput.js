import React, { useRef, useState, useLayoutEffect } from 'react';
import { TitleInputContainer } from './TitleInput.styles';

const TitleInput = props => {
  const { value = '' } = props;
  const hiddenRef = useRef({});
  const [width, setWidth] = useState();

  useLayoutEffect(() => {
    setWidth(hiddenRef.current.clientWidth + 1.5);
  }, [hiddenRef, value]);

  return (
    <TitleInputContainer width={width}>
      <input className="title-input__input" {...props} value={value} />
      <div className="title-input__hidden" ref={hiddenRef}>
        {value}
      </div>
    </TitleInputContainer>
  );
};

export default TitleInput;
