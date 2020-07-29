import React from 'react';
import { gliderSmall, gliderMed, gliderLarge } from '../../../sampleGrid/glider';

const Glider = ({ numRows, setGrid }) => {
    const seedGlider = () => {
        if (numRows === 10) {
            setGrid(gliderSmall)
        } else if (numRows === 25) {
            setGrid(gliderMed)
        } else if (numRows === 50) {
            setGrid(gliderLarge)
        }
    }

    return (
        <button onClick={seedGlider}>Glider</button>
    )
}

export default Glider;