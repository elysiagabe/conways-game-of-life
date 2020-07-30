import React, { useState } from 'react';
import styled from 'styled-components';
// components
import Header from './Header';
import Grid from './gameComponents/Grid';
import SizeConfig from './gameComponents/customize/SizeConfig';
import SpeedConfig from './gameComponents/customize/SpeedConfig';



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
        <div>
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
                <h3>Customize Configuration</h3>
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
        </div>
    )
}

export default GameSimulation;