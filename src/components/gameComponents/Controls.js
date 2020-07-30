import React, { useEffect } from 'react';
import styled from 'styled-components';
// utils
import setEmptyGrid from '../../utils/setEmptyGrid';

const ControlButtons = styled.div`
    width: 495px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

const Control = styled.button`
    font-family: 'MuseoModerno', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 6px 20px;
    margin: 20px 0;
    background-color: #7400B8;
    border: none;
    border-radius: 8px;
    color: white;
    transition: background-color .3s, box-shadow .3s;

    &:hover {
        box-shadow: 2px 2px 1px #BC47FF;
        background-color: #8E00E0;
    }
`

const Controls = ({ running, setRunning, runSimulation, intervalSpeed, numRows, numCols, setGrid, setGeneration, hideGrid, setHideGrid }) => {
    // click handler for Start/Stop
    const toggleRunning = () => {
        setRunning(!running)
    }

    // Runs game logic on interval (triggered by running)
    useEffect(() => {
        let interval;
        if(running) {
            interval = setInterval(runSimulation, intervalSpeed)
        } else if (!running) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [running, runSimulation, intervalSpeed])

    // click handler for hide
    const hide = () => {
        setHideGrid(!hideGrid)
    }

    // click handler for clear
    const clearGrid = () => {
        setGrid(setEmptyGrid(numRows, numCols))
        setGeneration(0)
    }

    return (
        <ControlButtons>
            <Control onClick={toggleRunning}>{running ? "Stop" : "Start"}</Control>
            <Control onClick={runSimulation}>Advance One</Control>
            <Control onClick={hide}>Hide Grid</Control>
            <Control onClick={clearGrid}>Clear Grid</Control>
        </ControlButtons>
    )
}

export default Controls;