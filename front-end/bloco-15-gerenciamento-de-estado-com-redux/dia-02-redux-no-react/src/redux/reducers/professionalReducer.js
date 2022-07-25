import { PROFESSIONAL_TYPE } from '../actions/actionTypes';

const INITIAL_STATE = {
  professionalData: {},
};

const profesionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFESSIONAL_TYPE:
    return ({
      ...state,
      professionalData: action.professionalData,
    });
  default:
    return state;
  }
};

export default profesionalReducer;
