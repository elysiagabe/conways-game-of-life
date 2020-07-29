import React, { useState } from 'react';
// components
import Grid from './gameComponents/Grid';

const GameSimulation = () => {
    const [numRows, setNumRows] = useState(15);
    const [numCols, setNumCols] = useState(15);
    const [generation, setGeneration] = useState(0);

    return (
        <div>
            <h1>Conway's Game of Life</h1>
            <h2>Generation: {generation}</h2>
            <Grid numRows={numRows} numCols={numCols} setGeneration={setGeneration} generation={generation} />
        </div>
    )
}

export default GameSimulation;