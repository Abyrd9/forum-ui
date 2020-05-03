/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import chroma from "chroma-js";
import {
  ColorsConfigureItemContainer,
  PaletteBlock
} from "./ColorsConfigureItem.styles";
import PencilIcon from "../Utilities/Icons/PencilIcon";
import Transition from "../Utilities/Transition";
import TitleInput from "./components/TitleInput";
import PaletteToggle from "./components/PaletteToggle";
import DeleteOverlay from "./components/DeleteOverlay";
import DeleteButton from "./components/DeleteButton";
import AddButton from "./components/AddButton";

const isHex = /^#([A-Fa-f0-9]{6})$/i;

const ColorsConfigureItem = ({
  colorId,
  color,
  isFlat,
  palette,
  title,
  handleUpdateTitle,
  handleUpdateColor,
  handleToggleIsFlat,
  handleDeleteColor,
  handleAddColor
}) => {
  // Delete Color Item Overlay
  const [overlayVisible, toggleOverlayVisible] = useState(false);

  // If a color has a bad hex value, we'll turn the color item gray to note that
  const isValidColor = chroma.valid(color) && isHex.test(color);
  const [badColorValue, toggleBadColorValue] = useState(!isValidColor);
  useEffect(() => {
    toggleBadColorValue(!isValidColor);
  }, [color]);

  return (
    <ColorsConfigureItemContainer color={color} badColorValue={badColorValue}>
      <Transition show={overlayVisible}>
        <DeleteOverlay
          text="Are you sure you want to delete this color?"
          handleOnClose={() => toggleOverlayVisible(false)}
          handleOnDelete={() => handleDeleteColor(colorId)}
        />
      </Transition>
      <div className="title-section">
        <TitleInput
          placeholder=""
          value={title}
          handleOnChange={({ target = {} }) =>
            handleUpdateTitle(colorId, target.value)
          }
        />
        <PaletteToggle
          color={color}
          isFlat={isFlat}
          toggleIsFlat={() => handleToggleIsFlat(colorId, color, !isFlat)}
          badColorValue={badColorValue}
        />
        {colorId === "creator" ? (
          <AddButton disabled={badColorValue} handleOnClick={handleAddColor} />
        ) : (
          <DeleteButton handleOnClick={() => toggleOverlayVisible(true)} />
        )}
      </div>
      <label className="color-block__color-block">
        <span className="color-block__color-icon-container">
          <PencilIcon className="color-block__color-icon" />
        </span>
        <input
          value={color}
          onKeyPress={event => {
            if (
              colorId === "creator" &&
              event.key === "Enter" &&
              !badColorValue
            ) {
              handleAddColor();
            }
          }}
          onChange={({ target = {} }) =>
            handleUpdateColor(colorId, target.value)
          }
          className="color-block__color-input"
          placeholder="#000000"
        />
      </label>
      <div className="color-block__palette-block">
        {badColorValue ? (
          <PaletteBlock badColorValue />
        ) : (
          <>
            {Object.entries(palette).map(([key, shade]) => {
              const isSingleColor = Object.keys(palette).length === 1;
              return (
                <PaletteBlock color={shade} isSingleColor={isSingleColor}>
                  {key}
                </PaletteBlock>
              );
            })}
          </>
        )}
      </div>
    </ColorsConfigureItemContainer>
  );
};

ColorsConfigureItem.defaultProps = {
  colorId: "",
  color: "",
  isFlat: false,
  palette: "",
  title: "",
  handleUpdateTitle: () => {},
  handleUpdateColor: () => {},
  handleToggleIsFlat: () => {},
  handleDeleteColor: () => {},
  handleAddColor: () => {}
};

ColorsConfigureItem.propTypes = {
  colorId: PropTypes.string,
  color: PropTypes.string,
  isFlat: PropTypes.bool,
  palette: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string,
  handleUpdateTitle: PropTypes.func,
  handleUpdateColor: PropTypes.func,
  handleToggleIsFlat: PropTypes.func,
  handleDeleteColor: PropTypes.func,
  handleAddColor: PropTypes.func
};

export default ColorsConfigureItem;
