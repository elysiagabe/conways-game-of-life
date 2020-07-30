import React, { useState } from 'react';
import styled from 'styled-components';
// components
import Header from './Header';
import Grid from './gameComponents/Grid';
import SizeConfig from './gameComponents/customize/SizeConfig';
import SpeedConfig from './gameComponents/customize/SpeedConfig';

const Game = styled.div`
    margin-bottom: 48px;
`

const GenCount = styled.h2`
    font-size: 20px;    
    font-weight: 400;
    padding-bottom: 8px;
`

const GameSimulation = () => {
    const [numRows, setNumRows] = useState(25);
    const [numCols, setNumCols] = useState(25);
    const [cellSize, setCellSize] = useState("20px")
    const [generation, setGeneration] = useState(0);
    const [intervalSpeed, setIntervalSpeed] = useState(500);

    return (
        <Game>
            <Header />
            <GenCount>Generation: {generation}</GenCount>
            <Grid 
                numRows={numRows} 
                numCols={numCols} 
                setGeneration={setGeneration} 
                generation={generation} 
                intervalSpeed={intervalSpeed} 
                cellSize={cellSize}
            />
            <div>
                <SizeConfig 
                    setNumRows={setNumRows}
                    setNumCols={setNumCols}
                    setCellSize={setCellSize}
                />
                <SpeedConfig 
                    intervalSpeed={intervalSpeed} 
                    setIntervalSpeed={setIntervalSpeed} 
                />
            </div>
        </Game>
    )
}

export default GameSimulation;