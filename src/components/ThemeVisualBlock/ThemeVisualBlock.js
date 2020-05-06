/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useMemo, useContext } from "react";
import PropTypes from "prop-types";
import { faTrashAlt, faCheckCircle } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreContext, ACTION_TYPES } from "../../assets/StoreProvider";
import { ThemeVisualBlockStyled, ColorItem } from "./ThemeVisualBlock.styles";
import Transition from "../Utilities/Transition";
import DeleteOverlay from "../ColorsConfigureItem/components/DeleteOverlay";

const ThemeVisualBlock = ({ themesLength, theme, selected }) => {
  // Delete Color Item Overlay
  const [overlayVisible, toggleOverlayVisible] = useState(false);

  const { dispatch } = useContext(StoreContext);
  const { themeId = "", themeName = "", colors = {}, typography = {} } = theme;

  const palettesArray = useMemo(() => {
    const colorsArr = Object.values(colors);
    const newColorsArr = [];
    for (let i = 0; i <= 2; i++) {
      const palette = colorsArr[i] ? colorsArr[i].palette : [];
      newColorsArr.push(Object.values(palette));
    }
    return newColorsArr;
  }, [colors]);

  const handleCardClick = () => {
    dispatch({
      type: ACTION_TYPES.SET_ACTIVE_THEME,
      themeId
    });
  };

  const handleDeleteClick = () => {
    dispatch({
      type: ACTION_TYPES.DELETE_THEME,
      themeId
    });
    toggleOverlayVisible(false);
  };

  return (
    <ThemeVisualBlockStyled selected={selected}>
      <Transition show={overlayVisible}>
        <DeleteOverlay
          text="Are you sure you want to delete this theme?"
          handleOnClose={() => toggleOverlayVisible(false)}
          handleOnDelete={handleDeleteClick}
        />
      </Transition>
      <div className="theme-block-header">
        <h3 className="theme-block-header__theme-name">{themeName}</h3>
        <FontAwesomeIcon
          icon={faTrashAlt}
          className={`theme-block-header__trash-icon ${themesLength <= 1 ? 'theme-block-header__trash-icon--disabled' : ''}`}
          onClick={() => {
            if (themesLength > 1) toggleOverlayVisible(true);
          }}
        />
      </div>
      <div onClick={handleCardClick}>
        <div className="theme-block-content">
          <h3 className="theme-block-content__title">Colors</h3>
          <span className="theme-block-content__divider" />
          {palettesArray.map(palette => (
            <ul className="theme-block-content__color-list">
              {palette.map(value => (
                <ColorItem color={value} isFlat={palette.length <= 1} />
              ))}
            </ul>
          ))}
          {Object.values(colors).length > 3 && (
            <p className="theme-block-content__more-text">...more</p>
          )}
        </div>
        <div className="theme-block-content">
          <h3 className="theme-block-content__title">Font Family</h3>
          <span className="theme-block-content__divider" />
          <p className="theme-block-content__font-family">
            {typography.family || ""}
          </p>
        </div>
        <div className="theme-block-footer">
          <p className="theme-block-footer__text">selected</p>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="theme-block-footer__check-icon"
          />
        </div>
      </div>
    </ThemeVisualBlockStyled>
  );
};

ThemeVisualBlock.defaultProps = {
  themesLength: 1,
  theme: {},
  selected: false
};

ThemeVisualBlock.propTypes = {
  themesLength: PropTypes.number,
  theme: PropTypes.shape({
    themeId: PropTypes.string,
    themeName: PropTypes.string,
    colors: PropTypes.shape({
      palette: PropTypes.arrayOf(
        PropTypes.shape({ [PropTypes.string]: PropTypes.string })
      )
    }),
    typography: PropTypes.shape({
      family: PropTypes.string
    })
  }),
  selected: PropTypes.bool
};

export default ThemeVisualBlock;
