import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useImmerReducer } from "use-immer";
import { COLOR_CREATOR } from "../constants";
import { FirebaseContext } from "./FirebaseProvider";
import useDeepCompareEffect from "../hooks/useDeepCompareEffect";

export const ACTION_TYPES = {
  SET_USER_THEMES: "SET_USER_THEMES",

  SET_INITIAL_THEME: "SET_INITIAL_THEME",
  ADD_COLOR: "ADD_COLOR",
  UPDATE_COLOR: "UPDATE_COLOR",
  REMOVE_COLOR: "REMOVE_COLOR",
  UPDATE_TYPOGRAPHY_CONFIG: "UPDATE_TYPOGRAPHY_CONFIG",
  UPDATE_SPACING_CONFIG: "UPDATE_SPACING_CONFIG"
};

export const StoreContext = React.createContext({});

const reducer = (draft, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER_THEMES:
      // Themes are already sorted when called from firebase
      // The first one should be the active one, TODO: Track Last-Active Theme
      const { userThemes = {} } = action;
      const firstItem = Object.values(userThemes)[0] || {};
      draft = {
        activeThemeId: firstItem.themeId || "",
        themes: action.userThemes
      };
      return draft;

    case ACTION_TYPES.ADD_COLOR:
      draft.colors[action.key] = {
        ...action.colorObj,
        order: Object.keys(draft.colors).length + 1
      };
      draft.colors.creator = COLOR_CREATOR;
      return draft;
    case ACTION_TYPES.UPDATE_COLOR:
      draft.colors[action.colorId] = action.colorObj;
      return draft;
    case ACTION_TYPES.REMOVE_COLOR: {
      delete draft.colors[action.colorId];
      Object.values(draft.colors).forEach((color, index) => {
        color.order = index;
      });
      return draft;
    }
    case ACTION_TYPES.UPDATE_TYPOGRAPHY_CONFIG:
      Object.entries(action.payload).forEach(([key, value]) => {
        draft.typography[key] = value;
      });
      return draft;
    case ACTION_TYPES.UPDATE_SPACING_CONFIG:
      draft.spacing[action.key] = action.payload;
      return draft;
    default:
      return draft;
  }
};

const StoreProvider = ({ children }) => {
  const { userThemes } = useContext(FirebaseContext);
  const [state, dispatch] = useImmerReducer(reducer, userThemes);

  // Once userThemes is updated, add it as the initial theme
  useDeepCompareEffect(() => {
    if (userThemes) {
      dispatch({ type: ACTION_TYPES.SET_USER_THEMES, userThemes });
    }
  }, [userThemes]);

  let theme = {};
  if (state && state.activeThemeId && state.themes) {
    const { activeThemeId, themes } = state;
    theme = themes[activeThemeId];
  }
  return (
    <StoreContext.Provider value={{ store: state || {}, dispatch, theme }}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default StoreProvider;
