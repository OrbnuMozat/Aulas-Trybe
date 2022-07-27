import { SET_LOGIN, SET_REGISTER } from './actionTypes';

const loginAction = (loginData) => ({
  type: SET_LOGIN,
  loginData,
});

export const registrationAction = (registrationData) => ({
  type: SET_REGISTER,
  registrationData,
});

export default loginAction;
