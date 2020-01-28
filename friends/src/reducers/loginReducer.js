import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/loginAction';

const initialState = {
    loading: false,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}