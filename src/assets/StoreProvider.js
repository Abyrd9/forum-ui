import React from "react";
import PropTypes from "prop-types";
import { useImmerReducer } from "use-immer";
import { COLOR_CREATOR } from "../constants";

export const ACTION_TYPES = {
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
    case ACTION_TYPES.SET_INITIAL_THEME:
      draft = action.theme;
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
  const [state, dispatch] = useImmerReducer(reducer, {});

  return (
    <StoreContext.Provider value={{ store: state, dispatch }}>
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
