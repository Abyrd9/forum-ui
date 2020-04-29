import React from "react";
import PropTypes from "prop-types";
import { PaletteToggleContainer } from "./PaletteToggle.styles";
import PaletteIcon from "../../../Utilities/Icons/PaletteIcon";

const PaletteToggle = ({ color, isFlat, toggleIsFlat, badColorValue }) => {
  return (
    <PaletteToggleContainer
      isFlat={isFlat}
      color={color}
      badColorValue={badColorValue}
    >
      <input
        className="palette-toggle-input"
        type="checkbox"
        checked={isFlat}
        onChange={() => toggleIsFlat(!isFlat)}
        disabled={badColorValue}
      />
      <PaletteIcon className="palette-toggle-icon" />
    </PaletteToggleContainer>
  );
};

PaletteToggle.defaultProps = {
  color: "",
  isFlat: false,
  toggleIsFlat: () => {},
  badColorValue: false
};

PaletteToggle.propTypes = {
  color: PropTypes.string,
  isFlat: PropTypes.bool,
  toggleIsFlat: PropTypes.func,
  badColorValue: PropTypes.bool
};

export default PaletteToggle;
