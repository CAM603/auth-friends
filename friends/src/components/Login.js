import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChanges = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const login = event => {
        event.preventDefault()
        setLoading(true)
        
        axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            setLoading(false)

            props.history.push('/friendsList')
        })
        .catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <form onSubmit={login}>
                    <input 
                    type="text"
                    placeholder="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChanges}
                    />
                    <input 
                    type="password"
                    placeholder="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChanges}
                    />
                    <button>{loading ? 'loading' : 'Submit!'}</button>
                </form>
            </div>
        </div>
    )
}

export default Login;