import { axiosWithAuth } from "../utils/axiosWithAuth"

export const DELETE_FRIENDS_START = "DELETE_FRIENDS_START"
export const DELETE_FRIENDS_SUCCESS = "DELETE_FRIENDS_SUCCESS"
export const DELETE_FRIENDS_FAILURE = "DELETE_FRIENDS_FAILURE"

export const deleteFriends = (id) => dispatch => {
    dispatch({ type: DELETE_FRIENDS_START })
        axiosWithAuth()
            .delete(`/friends/${id}`)
            .then(res => {
                console.log(res)
                dispatch({ type: DELETE_FRIENDS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: DELETE_FRIENDS_FAILURE, payload: err.response})
            })
}