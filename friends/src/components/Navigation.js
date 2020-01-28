import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to="/login">
                <p>Login</p>
                <p onClick={() => localStorage.removeItem('token')}>Logout</p>
            </Link>
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/friendsList">
                <p>Friends List</p>
            </Link>
        </div>
    )
}

export default Navigation;