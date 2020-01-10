import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ExampleCardSpacingStyled } from './ExampleCardSpacing.styles';
import useWindowResizeEffect from '../../../../hooks/useWindowResizeEffect';

const ExampleCardSpacing = ({ spacingKey, spacingValue, showSpacing, ContainerRef, ...props }) => {
  const CardSpacingRef = useRef(null);

  const [position, setPosition] = useState('');
  const [width, setWidth] = useState('');

  const getDimensions = () => {
    if (ContainerRef.current && CardSpacingRef.current) {
      const ContainerDimensions = ContainerRef.current.getBoundingClientRect();
      const CardSpacingDimensions = CardSpacingRef.current.getBoundingClientRect();

      const posDiff = ContainerDimensions.right - CardSpacingDimensions.right;
      setPosition(`${posDiff + 85}px`);
      const widthDiff =
        ContainerDimensions.right -
        (CardSpacingDimensions.right - CardSpacingRef.current.clientWidth / 2);
      setWidth(`${widthDiff + 10}px`);
    }
  };

  useEffect(() => {
    getDimensions();
  }, []);

  useWindowResizeEffect(() => {
    getDimensions();
  }, 100);

  return (
    <ExampleCardSpacingStyled
      ref={CardSpacingRef}
      spacingValue={spacingValue}
      showSpacing={showSpacing}
      position={position}
      width={width}
      {...props}
    >
      <div className="line" />
      <p className="spacing">
        {spacingValue} <span>({spacingKey})</span>
      </p>
    </ExampleCardSpacingStyled>
  );
};

ExampleCardSpacing.defaultProps = {
  spacingKey: '',
  spacingValue: '',
  showSpacing: true,
  ContainerRef: { current: null },
};

ExampleCardSpacing.propTypes = {
  spacingKey: PropTypes.string,
  spacingValue: PropTypes.string,
  showSpacing: PropTypes.bool,
  ContainerRef: PropTypes.node,
};

export default ExampleCardSpacing;
