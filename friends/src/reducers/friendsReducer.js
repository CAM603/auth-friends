import { 
    FETCH_FRIENDS_START, 
    FETCH_FRIENDS_SUCCESS, 
    FETCH_FRIENDS_FAILURE 
} from '../actions/fetchFriendsAction';

import {
    DELETE_FRIENDS_START,
    DELETE_FRIENDS_SUCCESS,
    DELETE_FRIENDS_FAILURE
} from '../actions/deleteFriendsAction';

import {
    ADD_FRIENDS_START,
    ADD_FRIENDS_SUCCESS,
    ADD_FRIENDS_FAILURE
} from '../actions/addFriendsAction';

const initialState = {
    friends: [],
    loading: false,
    editing: false,
    deleting: false,
    adding: false,
    error: ''
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                loading: false,
                friends: action.payload
            }
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case DELETE_FRIENDS_START:
            return {
                ...state,
                deleting: true
            }
        case DELETE_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                deleting: false
            }
        case DELETE_FRIENDS_FAILURE:
            return {
                ...state,
                deleting: false,
                error: action.payload
            }
        case ADD_FRIENDS_START:
            return {
                ...state,
                adding: true
            }
        case ADD_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                adding: false
            }
        case ADD_FRIENDS_FAILURE:
            return {
                ...state,
                adding: false,
                error: action.payload
            }
        default:
            return state
    }
}