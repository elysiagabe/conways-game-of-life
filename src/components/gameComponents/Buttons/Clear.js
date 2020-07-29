import React from 'react';
// utils
import setEmptyGrid from '../../../utils/setEmptyGrid';

const Clear = ({ numRows, numCols, setGrid, setGeneration }) => {
    const clearGrid = () => {
        setGrid(setEmptyGrid(numRows, numCols))
        setGeneration(0)
    }

    return (
        <button onClick={clearGrid}>Clear Grid</button>
    )
}

export default Clear;