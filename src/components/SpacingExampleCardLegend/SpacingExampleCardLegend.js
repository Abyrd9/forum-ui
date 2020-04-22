import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SpacingExampleCardLegendStyled } from "./SpacingExampleCardLegend.styles";
import useWindowResize from "../../hooks/useWindowResize";

const SpacingExampleCardLegend = ({
  spacingKey,
  spacingValue,
  showSpacing,
  ContainerRef,
  ...props
}) => {
  const CardSpacingRef = useRef(null);

  const [position, setPosition] = useState("");
  const [width, setWidth] = useState("");

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

  useWindowResize(() => {
    getDimensions();
  }, 100);

  return (
    <SpacingExampleCardLegendStyled
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
    </SpacingExampleCardLegendStyled>
  );
};

SpacingExampleCardLegend.defaultProps = {
  spacingKey: "",
  spacingValue: "",
  showSpacing: true,
  ContainerRef: { current: null }
};

SpacingExampleCardLegend.propTypes = {
  spacingKey: PropTypes.string,
  spacingValue: PropTypes.string,
  showSpacing: PropTypes.bool,
  ContainerRef: PropTypes.node
};

export default SpacingExampleCardLegend;
