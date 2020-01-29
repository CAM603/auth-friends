import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
const Navigation = () => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <Nav>
                    <NavItem>
                        <NavLink>
                            <Link to="/login">
                                <p>Login</p>
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/login">
                                <p onClick={() => localStorage.removeItem('token')}>Logout</p>
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/">
                                <p>Home</p>
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/friendsList">
                                <p>Friends List</p>
                            </Link>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation;