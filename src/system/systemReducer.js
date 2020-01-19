import { systemActions } from '../constants/actionTypes';

const initialState = {
  languageTrans: 'en'
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case systemActions.CHANGE_LANGUAGE:
      return {
        ...state,
        languageTrans: action.data
      };
    default:
      return state;
  }
};

export default systemReducer;
