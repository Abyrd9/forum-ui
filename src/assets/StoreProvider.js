/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import { useImmerReducer } from "use-immer";
import isEmpty from "lodash.isempty";
import { uuid } from "uuidv4";
import { FirebaseContext } from "./FirebaseProvider";
import useDeepCompareEffect from "../hooks/useDeepCompareEffect";
import useDebounce from "../hooks/useDebounce";
import { INITIAL_TYPOGRAPHY, INITIAL_SPACING } from "../constants";
import buildColorPalette from "../helpers/buildColorPalette";
import updateSortOrder from "../helpers/updateSortOrder";

const db = firebase.firestore();
export const ACTION_TYPES = {
  SET_USER_THEMES: "SET_USER_THEMES",
  SET_USER_ID: "SET_USER_ID",
  SET_ACTIVE_THEME: "SET_ACTIVE_THEME",
  SET_THEME_TITLE: "SET_THEME_TITLE",
  CREATE_THEME: "CREATE_THEME",
  DELETE_THEME: "DELETE_THEME",
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
    case ACTION_TYPES.SET_USER_ID: {
      const { userId = "" } = action;
      draft.userId = userId;
      return draft;
    }
    case ACTION_TYPES.SET_ACTIVE_THEME: {
      draft.activeThemeId = action.themeId;
      return draft;
    }
    case ACTION_TYPES.SET_THEME_TITLE: {
      const { activeThemeId = "" } = draft || {};
      if (!isEmpty(draft)) {
        draft.themes[activeThemeId].themeName = action.value;
        return draft;
      }
      break;
    }
    case ACTION_TYPES.CREATE_THEME: {
      // A user can only create a theme when authenticated
      // So get a key from firebase database
      const ThemeRef = db
        .collection("users")
        .doc(draft.userId)
        .collection("themes")
        .doc();
      const NEW_KEY = ThemeRef.id;
      const NEW_THEME = {
        colors: {
          [uuid()]: {
            title: "neutral",
            color: "#BEBEBE",
            palette: buildColorPalette("#BEBEBE"),
            isFlat: false,
            sortOrder: 1
          }
        },
        spacing: INITIAL_SPACING,
        typography: INITIAL_TYPOGRAPHY,
        sortOrder: Object.values(draft.themes).length + 1,
        themeName: "New Theme",
        themeId: NEW_KEY
      };
      draft.themes[NEW_KEY] = NEW_THEME;
      draft.activeThemeId = NEW_KEY;
      break;
    }
    case ACTION_TYPES.DELETE_THEME: {
      const themesList = Object.values(draft.themes);
      // If there's only one theme, we won't delete it
      if (themesList.length > 1) {
        // if the deleted theme is also the active theme,
        // we need to select a new active theme
        if (draft.activeThemeId === action.themeId) {
          let currentSortOrder = draft.themes[action.themeId].sortOrder;

          // Always fallback to the previous theme, unless the theme being deleted
          // is the first one on the list
          const getNextSortOrder = order => (order > 1 ? order - 1 : order + 1);
          currentSortOrder = getNextSortOrder(currentSortOrder);

          const fallbackTheme = Object.values(draft.themes).find(theme => {
            return theme.sortOrder === currentSortOrder;
          });

          // If there is a fallback theme, make it the current theme
          if (!isEmpty(fallbackTheme)) {
            draft.activeThemeId = fallbackTheme.themeId;
          }
        }
        delete draft.themes[action.themeId];
        // Re-order the sort number of the themes
        draft.themes = updateSortOrder(draft.themes);

        // A user won't be able to create more than one theme if they're not logged in,
        // And they can only delete themes if there is more than one. Meaning, a user
        // must be logged in if they are able to delete themes. This also means we need
        // to delete the theme in the firestore and update all sortOrders of other themes.
        const ThemesRef = db
          .collection("users")
          .doc(draft.userId)
          .collection("themes");

        // Set up a batch call to delete the theme and update every other theme
        const batch = db.batch();
        batch.delete(ThemesRef.doc(action.themeId));
        Object.values(draft.themes).forEach(theme => {
          batch.set(ThemesRef.doc(theme.themeId), theme);
        });
        batch.commit().catch(error => {
          console.error(error.code);
          console.error(error.message);
        });
      }
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

        // Re-order the sort number of the colors
        const { colors } = draft.themes[activeThemeId];
        draft.themes[activeThemeId].colors = updateSortOrder(colors);
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
  const { userData, userThemes } = useContext(FirebaseContext);
  const [state, dispatch] = useImmerReducer(reducer, userThemes);

  // Once userThemes is updated, add it as the initial theme
  useDeepCompareEffect(() => {
    console.log(userThemes);

    if (!isEmpty(userThemes)) {
      dispatch({
        type: ACTION_TYPES.SET_USER_THEMES,
        userThemes
      });
    }
    if (!isEmpty(userData)) {
      dispatch({
        type: ACTION_TYPES.SET_USER_ID,
        userId: userData.uid
      });
    }
  }, [userThemes]);

  // This hook watches the current active theme and throttles
  // value changes accordingly
  const { userId = "", activeThemeId = "", themes = {} } = state || {};
  useDebounce(
    () => {
      if (userId && !isEmpty(themes[activeThemeId])) {
        const ThemeRef = db
          .collection("users")
          .doc(userId)
          .collection("themes")
          .doc(activeThemeId);
        ThemeRef.set(themes[activeThemeId]).catch(error => {
          console.error(error.code);
          console.error(error.message);
        });
      }
    },
    [themes[activeThemeId]],
    1000
  );

  return (
    <StoreContext.Provider value={{ store: state || {}, dispatch }}>
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
