import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
// utils
import setEmptyGrid from '../../utils/setEmptyGrid';
// components
import Cell from './Cell';
import Controls from './Controls';
import Random from './gridSeeds/Random';
import GridSeeds from './gridSeeds/GridSeeds';


const GridDiv = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: ${props => props.repeat};
`

const Grid = ({ numRows, numCols, generation, setGeneration, intervalSpeed, cellSize }) => {
    const [grid, setGrid] = useState(setEmptyGrid(numRows, numCols));
    const [running, setRunning] = useState(false);

    // Watches for change to size of grid
    useEffect(() => {
        setGrid(setEmptyGrid(numRows, numCols))
    }, [numRows, numCols])

    // MAIN GAME LOGIC TO RUN SIMULATION
    const runSimulation = () => {
        // clone existing grid to modify
        let newGrid = _.cloneDeep(grid);
        // find neighbor count and apply logic accordingly
        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
                // define cell's neighbords
                let neighbors = [
                    _.get(grid, [r - 1, c]),
                    _.get(grid, [r - 1, c + 1]),
                    _.get(grid, [r, c + 1]),
                    _.get(grid, [r + 1, c + 1]),
                    _.get(grid, [r + 1, c]),
                    _.get(grid, [r + 1, c - 1]),
                    _.get(grid, [r, c - 1]),
                    _.get(grid, [r - 1, c - 1])
                ]
                // find neighborCount (sum of all alive neighbors)
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
        // increment generation number
        setGeneration(generation += 1)
        // update grid state to new grid
        setGrid(newGrid)
    }

    return (
        <>
            <GridDiv repeat={`repeat(${numCols}, ${cellSize})`}>
                {grid.map((rows, r) =>
                    rows.map((col, c) => (
                        <Cell
                            key={`${r}-${c}`}
                            grid={grid}
                            setGrid={setGrid}
                            r={r}
                            c={c}
                            size={cellSize}
                            running={running}
                        />
                    ))
                )}
            </GridDiv>
            <Controls 
                running={running} 
                setRunning={setRunning} 
                runSimulation={runSimulation} 
                intervalSpeed={intervalSpeed}
                numRows={numRows} 
                numCols={numCols} 
                setGrid={setGrid} 
                setGeneration={setGeneration}
            />
            <div>
                <Random 
                    grid={grid} 
                    setGrid={setGrid} 
                    numRows={numRows} 
                    numCols={numCols} 
                    setGeneration={setGeneration}
                />
                <GridSeeds 
                    numRows={numRows}
                    setGrid={setGrid}
                    setGeneration={setGeneration}
                />
            </div>
        </>
    )
}

export default Grid;