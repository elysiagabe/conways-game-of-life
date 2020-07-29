import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
// utils
import setEmptyGrid from '../../utils/setEmptyGrid';
// components
import Cell from './Cell';
import StartStop from './Buttons/StartStop';
import Clear from './Buttons/Clear';

const GridDiv = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: ${props => props.repeat};
`

const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 16px;
`



const Grid = ({ numRows, numCols, generation, setGeneration }) => {
    const [grid, setGrid] = useState(setEmptyGrid(numRows, numCols));
    const [running, setRunning] = useState(false);
    console.log({ running })
    console.log({ generation })

    // MAIN GAME LOGIC TO RUN SIMULATION
    const runSimulation = () => {
        // if running is false, return
        // if (!running) {
        //     return; 
        // }

        // initialize copy of existing grid to modify
        // let newGrid = _.cloneDeep(grid);
        let newGrid = [...grid]

        // find neighbor count and apply logic accordingly
        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
                // define cell's neighbords
                let neighbors = [
                    // grid[r-1][c],
                    _.get(grid, [r - 1, c]),
                    // grid[r-1][c+1],
                    _.get(grid, [r - 1, c + 1]),
                    // grid[r][c+1],
                    _.get(grid, [r, c + 1]),
                    // grid[r+1][c+1],
                    _.get(grid, [r + 1, c + 1]),
                    // grid[r+1][c],
                    _.get(grid, [r + 1, c]),
                    // grid[r+1][c-1],
                    _.get(grid, [r + 1, c - 1]),
                    // grid[r][c-1],
                    _.get(grid, [r, c - 1]),
                    // grid[r-1][c-1]
                    _.get(grid, [r - 1, c - 1])
                ]

                // initialize neighborCount (this will count # of alive cells)
                let neighborCount = 0;

                neighbors.forEach(n => {
                    if (n !== undefined) {
                        neighborCount += n
                    }
                })

                // apply game logic
                if (neighborCount < 2 || neighborCount > 3) {
                    newGrid[r][c] = 0;
                } else if (grid[r][c] === 0 && neighborCount === 3) {
                    newGrid[r][c] = 1;
                }
            }
        }

        // return newGrid
        // update grid state to new grid
        setGrid(newGrid)
        setGeneration(generation++)
    }

    // const runSimulation = () => {
    //     // getNextGeneration(grid, numRows, numCols)
    //     setGrid(getNextGeneration(grid, numRows, numCols))
    //     setGeneration(generation++)
    // };

    return (
        <>
            <GridDiv repeat={`repeat(${numCols}, 24px)`}>
                {grid.map((rows, r) =>
                    rows.map((col, c) => (
                        <Cell
                            key={`${r}-${c}`}
                            grid={grid}
                            setGrid={setGrid}
                            r={r}
                            c={c}
                        />
                    ))
                )}
            </GridDiv>
            <ButtonsDiv>
                <StartStop running={running} setRunning={setRunning} runSimulation={runSimulation} />
                <Clear numRows={numRows} numCols={numCols} setGrid={setGrid} setGeneration={setGeneration} />
            </ButtonsDiv>
        </>
    )

}

export default Grid;