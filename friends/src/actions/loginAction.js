import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS })
        })
        .catch(error => {
            dispatch({ type: LOGIN_FAILURE, payload: error.response })
        })
}

// axiosWithAuth()
//         .post('/login', credentials)
//         .then(res => {
//             localStorage.setItem('token', res.data.payload);
//             setLoading(false)

//             props.history.push('/friendsList')
//         })
//         .catch(err => {
//             setLoading(false)
//             console.log(err)
//         })