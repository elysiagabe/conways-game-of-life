import React from 'react';
import { crossSmall, crossMed, crossLarge } from '../../../sampleGrid/cross';

const Cross = ({ numRows, setGrid, setGeneration }) => {
    const seedCross = () => {
        setGeneration(0)
        if (numRows === 10) {
            setGrid(crossSmall)
        } else if (numRows === 25) {
            setGrid(crossMed) 
        } else if (numRows === 50) {
            setGrid(crossLarge)
        }
    }

    return (
        <button onClick={seedCross}>Cross</button>
    )
}

export default Cross;