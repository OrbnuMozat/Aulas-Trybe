import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';

const rootReducers = combineReducers({ loginReducer, registrationReducer });

export default rootReducers;
