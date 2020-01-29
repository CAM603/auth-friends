import { 
    FETCH_FRIENDS_START, 
    FETCH_FRIENDS_SUCCESS, 
    FETCH_FRIENDS_FAILURE 
} from '../actions/fetchFriendsAction';

const initialState = {
    friends: [],
    loading: false,
    editing: false,
    deleting: false,
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
        default:
            return state
    }
}