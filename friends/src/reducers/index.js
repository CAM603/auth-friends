import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { friendReducer } from './friendReducer';
import { loginReducer } from './loginReducer';

export default combineReducers({
    friendsReducer,
    friendReducer,
    loginReducer
})