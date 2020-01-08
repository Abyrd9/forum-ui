import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ExampleCardSpacingStyled } from "./ExampleCardSpacing.styles";

const ExampleCardSpacing = ({ space, ContainerRef, ...props }) => {
  const CardSpacingRef = useRef(null);

  const [position, setPosition] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    if (ContainerRef.current && CardSpacingRef.current) {
      const ContainerDimensions = ContainerRef.current.getBoundingClientRect();
      const CardSpacingDimensions = CardSpacingRef.current.getBoundingClientRect();

      const posDiff = ContainerDimensions.right - CardSpacingDimensions.right;
      setPosition(`${posDiff + 50}px`);
      const widthDiff = ContainerDimensions.right - (CardSpacingDimensions.right - (CardSpacingRef.current.clientWidth / 2));
      setWidth(`${widthDiff + 10}px`);
    }
  }, [ContainerRef, CardSpacingRef])

  return (
    <ExampleCardSpacingStyled ref={CardSpacingRef} space={space} position={position} width={width} {...props}>
      <div className="line" />
      <p className="space">{space}</p>
    </ExampleCardSpacingStyled>
  );
};

ExampleCardSpacing.defaultProps = {
  space: "",
  ContainerRef: { current: null },
};

ExampleCardSpacing.propTypes = {
  space: PropTypes.string,
  ContainerRef: PropTypes.node,
};

export default ExampleCardSpacing;
