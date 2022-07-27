import { SET_LOGIN } from '../Actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  const { loginData } = action;
  switch (action.type) {
  case SET_LOGIN:
    return {
      ...state,
      email: loginData.email,
      password: loginData.password,
    };

  default:
    return state;
  }
};

export default loginReducer;
