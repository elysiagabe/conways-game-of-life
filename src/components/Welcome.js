import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            Welcome...Conway's Game of Life <br />
            <Link to='/game-of-life'>
                View Simulation
            </Link> <br />
            Rules
            <br /> About, etc
        </div>
    )
}

export default Welcome;