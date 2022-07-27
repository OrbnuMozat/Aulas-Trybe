import { SET_REGISTER } from '../Actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  name: '',
  age: '',
};

const registrationReducer = (state = INITIAL_STATE, action) => {
  const { registrationData } = action;
  switch (action.type) {
  case SET_REGISTER:
    return {
      ...state,
      registrationData,
    };

  default:
    return state;
  }
};

export default registrationReducer;
