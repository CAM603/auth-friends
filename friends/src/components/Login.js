import React, { useState } from 'react';

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
        // Custom axios call here
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <form>
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
                    <button>Submit!</button>
                </form>
            </div>
        </div>
    )
}

export default Login;