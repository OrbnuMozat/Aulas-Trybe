import { combineReducers } from 'redux';
import professionalReducer from './professionalReducer';
import personalReducer from './personalReducer';

const rootReducer = combineReducers({ professionalReducer, personalReducer });

export default rootReducer;
