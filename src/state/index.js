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
import ACTION_TYPES from './actionTypes';

const initialState = {
  colors: { ...INITIAL_COLORS },
  typography: { ...INITIAL_TYPOGRAPHY_CONFIG },
  spacing: { ...INITIAL_SPACING_CONFIG },
  build: {},
};

export const StoreContext = React.createContext({});

const reducer = (draft, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_COLOR:
      draft.colors[action.key] = action.colorObj;
      draft.creator = INITIAL_CREATOR;
      return draft;
    case ACTION_TYPES.UPDATE_COLOR:
      draft.colors[action.colorId] = action.colorObj;
      return draft;
    case ACTION_TYPES.REMOVE_COLOR:
      delete draft.colors[action.colorId];
      return draft;
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
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ store: state, dispatch }}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
