import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { CurrentThemeStyled } from "./CurrentTheme.styles";
import { StoreContext, ACTION_TYPES } from "../../assets/StoreProvider";
import Divider from "../Divider";
import ThemeToolbox from "../ThemeToolbox/ThemeToolbox";

const CurrentTheme = ({ themeName }) => {
  const { pathname = "" } = useLocation();
  const { store = {}, dispatch } = useContext(StoreContext);
  const { activeThemeId = "", themes = {} } = store;
  const currentTheme = themes[activeThemeId] || {};

  return (
    <CurrentThemeStyled>
      <h5 className="title">Current Theme:</h5>
      {pathname.includes("edit-theme") ? (
        <input
          className="theme-input-name"
          value={themeName}
          onChange={({ target }) =>
            dispatch({
              type: ACTION_TYPES.SET_THEME_TITLE,
              value: target.value
            })
          }
        />
      ) : (
        <h3 className="theme-name">{themeName}</h3>
      )}
      <ThemeToolbox
        activeThemeId={currentTheme.themeId || ""}
        activeThemeName={currentTheme.themeName || ""}
      />
      <Divider spacing={600} />
      <span className="divider-line" />
    </CurrentThemeStyled>
  );
};

CurrentTheme.defaultProps = {
  themeName: ""
};

CurrentTheme.propTypes = {
  themeName: PropTypes.string
};

export default CurrentTheme;
