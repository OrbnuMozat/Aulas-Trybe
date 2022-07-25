import { PERSONAL_TYPE } from '../actions/actionTypes';

const INITIAL_STATE = {
  personalData: {},
};

const personalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_TYPE:
    return ({
      ...state,
      personalData: action.personalData,
    });
  default:
    return state;
  }
};

export default personalReducer;
