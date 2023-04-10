import listActions from '../stores/actionType';

// UX
export const switchDarkMode = (darkMode) => {
  return async (dispatch, getState) => {
    dispatch({type:listActions.switchDarkMode, payload:{darkMode}})
  }
}

export const changeLanguage = (sourceTarget, language) => {
  return async (dispatch, getState) => {
    dispatch({type:listActions.changeLanguage, payload:{sourceTarget, language}})
  }
}