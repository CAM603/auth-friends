import React from 'react';
import { Link } from 'react-router-dom';

import { Jumbotron, Button } from 'reactstrap';

const Home = () => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Welcome to Friends</h1>
                <hr className="my-2" />
                <h4>Stalk, edit and even delete your friends!</h4>
                <p className="lead">
                    <Link to="/login">
                        <Button color="primary">Get Started</Button>
                    </Link>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Home;