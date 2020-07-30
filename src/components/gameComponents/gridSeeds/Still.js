import React from 'react';
import _ from 'lodash';
import { stillSmall, stillMed, stillLarge } from '../../../sampleGrid/still';

const Still = ({ numRows, setGrid, setGeneration }) => {
    const seedStill = () => {
        setGeneration(0)
        if (numRows === 10) {
            setGrid(stillSmall)
        } else if (numRows === 25) {
            setGrid(stillMed)
        } else if (numRows === 50) {
            setGrid(stillLarge)
        }
    }

    return (
        <button onClick={seedStill}>Still Life</button>
    )
}

export default Still;