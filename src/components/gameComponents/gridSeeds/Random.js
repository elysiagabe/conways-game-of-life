import React from 'react';
import _ from 'lodash';

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
            <button onClick={seedRandom}>Random</button>
        </div>
    )
}

export default Random;