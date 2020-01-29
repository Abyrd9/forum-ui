/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import React from 'react';
import { useImmerReducer } from 'use-immer';
import {
  INITIAL_COLORS,
  INITIAL_CREATOR,
  INITIAL_TYPOGRAPHY_CONFIG,
  INITIAL_SPACING_CONFIG,
} from '../constants';

export const ACTION_TYPES = {
  SET_INITIAL_THEME: 'SET_INITIAL_THEME',
  ADD_COLOR: 'ADD_COLOR',
  UPDATE_COLOR: 'UPDATE_COLOR',
  REMOVE_COLOR: 'REMOVE_COLOR',
  UPDATE_TYPOGRAPHY_CONFIG: 'UPDATE_TYPOGRAPHY_CONFIG',
  UPDATE_SPACING_CONFIG: 'UPDATE_SPACING_CONFIG',
};

const INITIAL_STATE = {
  colors: { ...INITIAL_COLORS },
  typography: { ...INITIAL_TYPOGRAPHY_CONFIG },
  spacing: { ...INITIAL_SPACING_CONFIG },
};

export const StoreContext = React.createContext({});

const reducer = (draft, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_INITIAL_THEME:
      if (action.theme) {
        const sortedColors = Object.entries(action.theme.colors)
          .sort((a, b) => a[1].order - b[1].order)
          .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {});
        draft = {
          themeId: action.themeId || '',
          colors: { creator: INITIAL_CREATOR, ...sortedColors },
          typography: action.theme.typography,
          spacing: action.theme.spacing,
        };
      } else {
        draft = { themeId: action.themeId || '', ...INITIAL_STATE };
      }
      return draft;
    case ACTION_TYPES.ADD_COLOR:
      draft.colors[action.key] = {
        ...action.colorObj,
        order: Object.keys(draft.colors).length + 1,
      };
      draft.colors.creator = INITIAL_CREATOR;
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
    <StoreContext.Provider value={{ store: state, dispatch }}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
