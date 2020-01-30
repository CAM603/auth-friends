import { axiosWithAuth } from "../utils/axiosWithAuth";

export const EDIT_FRIEND_START = "EDIT_FRIEND_START";
export const UPDATE_FRIEND_START = "UPDATE_FRIEND_START";
export const UPDATE_FRIEND_SUCCESS = "UPDATE_FRIEND_SUCCESS";
export const UPDATE_FRIEND_FAILURE = "UPDATE_FRIEND_FAILURE";

export const setFriendToEdit = (friend) => dispatch => {
    dispatch({ type: EDIT_FRIEND_START, payload: friend})
}

export const updateFriend = (friend) => dispatch => {
    dispatch({ type: UPDATE_FRIEND_START })
        axiosWithAuth()
            .put(`/friends/${friend.id}`, friend)
            .then(res => {
                console.log(res)
                dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: UPDATE_FRIEND_FAILURE, payload: err.response })
            })
}