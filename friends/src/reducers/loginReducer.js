const initialState = {
    credentials: {
        username: '',
        password: ''
    },
    loading: false,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}