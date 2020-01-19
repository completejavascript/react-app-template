import Cookie from 'js-cookie';
import { systemActions } from '../constants/actionTypes';
import { LANGUAGE_TRANS } from '../constants/cookies';
import Config from '../constants/configs';

const initialState = {
  languageTrans: Cookie.get(LANGUAGE_TRANS) || 'en'
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case systemActions.CHANGE_LANGUAGE:
      if (action.data) {
        Cookie.set(LANGUAGE_TRANS, action.data, { domain: Config.domain });
      }
      return {
        ...state,
        languageTrans: action.data
      };
    default:
      return state;
  }
};

export default systemReducer;
