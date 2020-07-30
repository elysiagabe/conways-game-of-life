import React from 'react';
import { acornSmall, acornMed, acornLarge } from '../../../sampleGrid/acorn';

const Acorn = ({ numRows, setGrid, setGeneration }) => {
    const seedAcorn = () => {
        setGeneration(0)
        if (numRows === 10) {
            setGrid(acornSmall)
        } else if (numRows === 25) {
            setGrid(acornMed)
        } else if (numRows === 50) {
            setGrid(acornLarge)
        }
    }

    return (
        <button onClick={seedAcorn}>Acorn</button>
    )
}

export default Acorn;