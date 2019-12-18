import React from 'react';
import PropTypes from 'prop-types';
import { PaletteToggleContainer } from './PaletteToggle.styles';
import PaletteIcon from '../../../../Icons/PaletteIcon';

const PaletteToggle = ({ color, isFlat, toggleIsFlat, disabled }) => {
  return (
    <PaletteToggleContainer isFlat={isFlat} color={color} disabled={disabled}>
      <input
        className="palette-toggle-input"
        type="checkbox"
        checked={isFlat}
        onChange={() => toggleIsFlat(!isFlat)}
        disabled={disabled}
      />
      <PaletteIcon className="palette-toggle-icon" />
    </PaletteToggleContainer>
  );
};

PaletteToggle.defaultProps = {
  color: '',
  isFlat: false,
  toggleIsFlat: () => {},
};

PaletteToggle.propTypes = {
  color: PropTypes.string,
  isFlat: PropTypes.bool,
  toggleIsFlat: PropTypes.func,
};

export default PaletteToggle;
