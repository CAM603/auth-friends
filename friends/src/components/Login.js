import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/loginAction';
import { Redirect } from 'react-router';

const Login = (props) => {
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
        props.login(credentials);
        setCredentials({
            username: '',
            password: ''
        })
    }
    if(props.loggedIn) {
        return <Redirect to="/friendsList"/>
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
                    <button>{props.loading ? 'loading' : 'Submit!'}</button>
                </form>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        loading: state.loginReducer.loading,
        loggedIn: state.loginReducer.loggedIn
    }
}
export default connect(mapStateToProps, {login})(Login);