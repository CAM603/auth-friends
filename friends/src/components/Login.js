import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import { Button, Form, FormGroup, Input } from 'reactstrap';

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
        <div className="form">
            <h1>Login</h1>
            <div>
                <Form onSubmit={login}>
                    <FormGroup>
                        <Input 
                        type="text"
                        placeholder="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChanges}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        type="password"
                        placeholder="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChanges}
                        />
                    </FormGroup>
                    <Button color="primary">{loading ? 'loading' : 'Submit!'}</Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;