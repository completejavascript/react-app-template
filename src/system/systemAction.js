import { systemActions } from '../constants/actionTypes';

export const actionChangeLanguage = languageTrans => dispatch => {
  dispatch({
    type: systemActions.CHANGE_LANGUAGE,
    data: languageTrans
  });
};
