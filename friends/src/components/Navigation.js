import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to="/login">
                <p>Login</p>
            </Link>
            <Link to="/">
                <p>Home</p>
            </Link>
            <p>Something</p>
        </div>
    )
}

export default Navigation;