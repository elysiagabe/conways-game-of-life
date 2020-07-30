import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

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

const Random = ({ grid, setGrid, numRows, numCols, setGeneration }) => {
    const seedRandom = () => {
        setGeneration(0)
        let randomGrid = _.cloneDeep(grid)
        for (let r=0; r < numRows; r++) {
            for (let c=0; c < numCols; c++) {
                if(Math.floor(Math.random() * 4) === 1) {
                    randomGrid[r][c] = 1
                }
            }
        }
        setGrid(randomGrid)
    }

    return (
        <div>
            <SeedButton onClick={seedRandom}>Random</SeedButton>
        </div>
    )
}

export default Random;