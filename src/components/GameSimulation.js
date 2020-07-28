import React from 'react';
// components
import Grid from './gameComponents/Grid';

const GameSimulation = () => {
    return (
        <div>
            <h1>Conway's Game of Life</h1>
            <Grid />
        </div>
    )
}

export default GameSimulation;