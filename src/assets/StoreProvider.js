/* eslint-disable no-param-reassign */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useImmerReducer } from "use-immer";
import isEmpty from "lodash.isempty";
import { COLOR_CREATOR } from "../constants";
import { FirebaseContext } from "./FirebaseProvider";
import useDeepCompareEffect from "../hooks/useDeepCompareEffect";

export const ACTION_TYPES = {
  SET_USER_THEMES: "SET_USER_THEMES",
  UPDATE_COLOR_TITLE: "UPDATE_COLOR_TITLE",
  UPDATE_COLOR_VALUE: "UPDATE_COLOR_VALUE",
  TOGGLE_COLOR_IS_FLAT: "TOGGLE_COLOR_IS_FLAT",
  ADD_COLOR_ITEM: "ADD_COLOR_ITEM",
  REMOVE_COLOR_ITEM: "REMOVE_COLOR_ITEM",
  UPDATE_TYPOGRAPHY: "UPDATE_TYPOGRAPHY",
  UPDATE_SPACING: "UPDATE_SPACING"
};

export const StoreContext = React.createContext({});

const reducer = (draft, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER_THEMES: {
      // Themes are already sorted when called from firebase
      // The first one should be the active one, TODO: Track Last-Active Theme
      const { userThemes = {} } = action;
      const firstItem = Object.values(userThemes)[0] || {};
      draft = {
        activeThemeId: firstItem.themeId || "",
        themes: action.userThemes
      };
      return draft;
    }
    case ACTION_TYPES.UPDATE_COLOR_TITLE: {
      const { colorId = "", title = "" } = action;
      const { activeThemeId = "" } = draft || {};
      if (!isEmpty(draft)) {
        draft.themes[activeThemeId].colors[colorId].title = title;
        return draft;
      }
      break;
    }
    case ACTION_TYPES.UPDATE_COLOR_VALUE: {
      const { colorId = "", color = "", palette = {} } = action;
      const { activeThemeId = "" } = draft || {};
      if (!isEmpty(draft)) {
        draft.themes[activeThemeId].colors[colorId].color = color;
        draft.themes[activeThemeId].colors[colorId].palette = palette;
        return draft;
      }
      break;
    }
    case ACTION_TYPES.TOGGLE_COLOR_IS_FLAT: {
      const { colorId = "", toggle = false, palette = {} } = action;
      const { activeThemeId = "" } = draft || {};
      if (!isEmpty(draft)) {
        draft.themes[activeThemeId].colors[colorId].isFlat = toggle;
        draft.themes[activeThemeId].colors[colorId].palette = palette;
        return draft;
      }
      break;
    }
    case ACTION_TYPES.ADD_COLOR_ITEM: {
      const { colorId = "", colorObj = {} } = action;
      const { activeThemeId = "" } = draft || {};
      if (!isEmpty(draft)) {
        draft.themes[activeThemeId].colors[colorId] = colorObj;
        return draft;
      }
      break;
    }
    case ACTION_TYPES.REMOVE_COLOR_ITEM: {
      const { colorId = "" } = action;
      const { activeThemeId = "" } = draft || {};
      if (!isEmpty(draft)) {
        delete draft.themes[activeThemeId].colors[colorId];
        return draft;
      }
      break;
    }
    case ACTION_TYPES.UPDATE_TYPOGRAPHY: {
      const { activeThemeId = "" } = draft || {};
      if (!isEmpty(draft)) {
        const current = draft.themes[activeThemeId].typography;
        draft.themes[activeThemeId].typography = {
          ...current,
          ...action.payload
        };
        return draft;
      }
      break;
    }
    case ACTION_TYPES.UPDATE_SPACING: {
      const { activeThemeId = "" } = draft || {};
      if (!isEmpty(draft)) {
        const current = draft.themes[activeThemeId].spacing;
        draft.themes[activeThemeId].spacing = {
          ...current,
          ...action.payload
        };
        return draft;
      }
      break;
    }
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
