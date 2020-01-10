import React from 'react';
import PropTypes from 'prop-types';
import { SpacingLegendStyled } from './SpacingLegend.styles';

const SpacingLegend = ({ spacingSizingArray }) => {
  return (
    <SpacingLegendStyled>
      {spacingSizingArray.map(([key, value], index) => (
        <>
          <div className="spacing-legend-item">
            <span className="spacing-legend-item__key">{key}</span>
            <span className="spacing-legend-item__divider" />
            <span className="spacing-legend-item__value">{value}</span>
          </div>
          {index !== spacingSizingArray.length - 1 && <div className="spacing-legend-divider" />}
        </>
      ))}
    </SpacingLegendStyled>
  );
};

SpacingLegend.defaultProps = {
  spacingSizingArray: [],
};

SpacingLegend.propTypes = {
  spacingSizingArray: PropTypes.arrayOf(PropTypes.arrayOf([PropTypes.string])),
};

export default SpacingLegend;
