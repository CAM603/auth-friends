import { axiosWithAuth } from "../utils/axiosWithAuth"

export const ADD_FRIENDS_START = "ADD_FRIENDS_START"
export const ADD_FRIENDS_SUCCESS = "ADD_FRIENDS_SUCCESS"
export const ADD_FRIENDS_FAILURE = "ADD_FRIENDS_FAILURE"

export const addFriends = (friend) => dispatch => {
    dispatch({ type: ADD_FRIENDS_START })
        axiosWithAuth()
            .post(`/friends`, friend)
            .then(res => {
                console.log(res)
                dispatch({ type: ADD_FRIENDS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: ADD_FRIENDS_FAILURE, payload: err.response })
            })
}