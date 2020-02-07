import React from 'react';
import PropTypes from 'prop-types';
import { PaletteToggleContainer } from './PaletteToggle.styles';
import PaletteIcon from '../../../../Utilities/Icons/PaletteIcon';

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
  disabled: false,
};

PaletteToggle.propTypes = {
  color: PropTypes.string,
  isFlat: PropTypes.bool,
  toggleIsFlat: PropTypes.func,
  disabled: PropTypes.bool,
};

export default PaletteToggle;
