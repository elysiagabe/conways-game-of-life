import React from 'react';
import { Link } from 'react-router-dom';
// components
import Header from './Header';

const Welcome = () => {
    return (
        <div>
            <Header />
            <Link to='/game-of-life'>
                View Simulation
            </Link> <br />
            Rules
            <br /> About, etc
        </div>
    )
}

export default Welcome;