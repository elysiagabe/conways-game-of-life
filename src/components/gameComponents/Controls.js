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
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 6px 20px;
    margin: 20px 0;
    background-color: #7400B8;
    // border: #7400B8 2px solid;
    border: none;
    border-radius: 8px;
    color: white;
    // box-shadow: 1px 1px #FF84E8;
    transition: background-color .3s, box-shadow .3s;

    &:hover {
        box-shadow: 2px 2px 1px #BC47FF;
        // opacity: .7;
        background-color: #8E00E0;
    }
`

const Controls = ({ running, setRunning, runSimulation, intervalSpeed, numRows, numCols, setGrid, setGeneration }) => {
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

    // click handler for clear
    const clearGrid = () => {
        setGrid(setEmptyGrid(numRows, numCols))
        setGeneration(0)
    }

    return (
        <ControlButtons>
            <Control onClick={toggleRunning}>{running ? "Stop" : "Start"}</Control>
            <Control onClick={runSimulation}>Advance One Step</Control>
            <Control onClick={clearGrid}>Clear Grid</Control>
        </ControlButtons>
    )
}

export default Controls;