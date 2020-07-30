import React from 'react';
import styled from 'styled-components';
// utils
import { getSeedGrid } from '../../../utils/getSeedGrid';

const SeedButton = styled.button`
    font-family: 'MuseoModerno', sans-serif;
    font-size: 14px;
    // font-weight: 600;
    letter-spacing: 1px;
    border: 1px solid #8E00E0;
    border-radius: 4px;
    padding: 4px 10px;
    margin: 8px;
    background-color: #1A0C31;
    color: #8E00E0;
    transition: background-color .2s, color .2s;

    &:hover, &:focus {
        background-color: #8E00E0;
        color: #fff;
    }
`

const GridSeeds = ({ numRows, setGeneration, setGrid }) => {
    const seeds = ['Still', 'Glider', 'Cross', 'Acorn']

    return (
        seeds.map(s => (
            <SeedButton key={s} onClick={() => getSeedGrid(numRows, s, setGeneration, setGrid)}>{s}</SeedButton>
        ))
    )
}

export default GridSeeds;