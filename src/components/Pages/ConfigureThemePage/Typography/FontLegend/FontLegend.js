import React from 'react';
import PropTypes from 'prop-types';
import { FontLegendStyled } from './FontLegend.styles';
import useMediaQuery from '../../../../../hooks/useMediaQuery';

const FontLegend = ({ fontSizingArray }) => {
  const mobile = window.matchMedia('(max-width: 768px)');
  const isMobile = useMediaQuery(mobile);

  const formattedArr = isMobile ? fontSizingArray.reverse() : fontSizingArray;
  return (
    <FontLegendStyled>
      <p className="font-legend-title">
        Key <span>/</span> Value
      </p>
      {formattedArr.reverse().map(([key, value]) => (
        <div className="font-legend-item">
          <span className="font-legend-item__key">{key}</span>
          <span className="font-legend-item__divider" />
          <span className="font-legend-item__value">{value}</span>
        </div>
      ))}
    </FontLegendStyled>
  );
};

FontLegend.defaultProps = {
  fontSizingArray: [],
};

FontLegend.propTypes = {
  fontSizingArray: PropTypes.arrayOf(PropTypes.arrayOf([PropTypes.string])),
};

export default FontLegend;
