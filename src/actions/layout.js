import {
  CHANGE_THEME_COLOR,
  TOGGLE_HEADER,
  TOGGLE_LOADER,
  TOGGLE_SIDE_MENU,
} from '../types';
import { patchAppInstance } from './appInstance';
import { getSettings } from './common';

export const toggleSideMenu = payload => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDE_MENU,
    payload,
  });
};

export const toggleLoader = showLoader => (dispatch) => {
  dispatch({
    type: TOGGLE_LOADER,
    payload: showLoader,
  });
};

export const toggleHeader = showHeader => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_HEADER,
    payload: showHeader,
  });

  const currentSettings = getSettings(getState);
  const newSettings = {
    ...currentSettings,
    showHeader,
  };
  dispatch(patchAppInstance({ data: newSettings }));
};

export const changeThemeColor = themeColor => (dispatch, getState) => {
  dispatch({
    type: CHANGE_THEME_COLOR,
    payload: themeColor,
  });

  const currentSettings = getSettings(getState);
  const newSettings = {
    ...currentSettings,
    themeColor,
  };
  dispatch(patchAppInstance({ data: newSettings }));
};


export default {
  toggleSideMenu,
  toggleHeader,
  toggleLoader,
  changeThemeColor,
};
