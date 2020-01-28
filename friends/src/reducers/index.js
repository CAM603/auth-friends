import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { friendReducer } from './friendReducer';
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({
    friendsReducer,
    friendReducer,
    loginReducer
})

export default rootReducer;