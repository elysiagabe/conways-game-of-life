import React from 'react';
import {getSeedGrid} from '../../../utils/getSeedGrid';

const GridSeeds = ({ numRows, setGeneration, setGrid }) => {
    const seeds = ['Still', 'Glider', 'Cross', 'Acorn']

    return (
        seeds.map(s => (
            <button key={s} onClick={() => getSeedGrid(numRows, s, setGeneration, setGrid)}>{s}</button>
        ))
    )
}

export default GridSeeds;