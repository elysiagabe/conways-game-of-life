import React, { useState } from 'react';
// components
import Grid from './gameComponents/Grid';
import SizeConfig from './gameComponents/customize/SizeConfig';
import SpeedConfig from './gameComponents/customize/SpeedConfig';

const GameSimulation = () => {
    const [numRows, setNumRows] = useState(25);
    const [numCols, setNumCols] = useState(25);
    const [generation, setGeneration] = useState(0);
    const [intervalSpeed, setIntervalSpeed] = useState(500)

    return (
        <div>
            <h1>Conway's Game of Life</h1>
            <h2>Generation: {generation}</h2>
            <Grid numRows={numRows} numCols={numCols} setGeneration={setGeneration} generation={generation} intervalSpeed={intervalSpeed} />
            <div>
                <h3>Customize Configuration</h3>
                <SizeConfig />
                <SpeedConfig intervalSpeed={intervalSpeed} setIntervalSpeed={setIntervalSpeed} />
            </div>
        </div>
    )
}

export default GameSimulation;