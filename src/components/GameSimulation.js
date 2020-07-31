import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    text-align: center;
`

const BackLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    margin-top: 40px;
    transition: text-decoration .2s;
    text-align: center;

    &:hover {
        text-decoration: underline;
    }
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
            <BackLink to="/">&larr; Back to Rules</BackLink>
        </Game>
    )
}

export default GameSimulation;